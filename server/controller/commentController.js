const Comment = require('../models/comment')
const Book = require('../models/book');
const async = require('async');

const {body, validationResult} = require("express-validator");

// Display list of all Comment.
exports.comment_list = function (req, res, next) {
    Comment.find()
        .sort([['name', 'ascending']])
        .exec(function (err, list_comments) {
            if (err) {
                return next(err);
            }
            // Successful, so render.
            res.render('comment_list', {title: 'Comment List', list_comments: list_comments});
        });

};

// Display detail page for a specific Comment.
exports.comment_detail = function (req, res, next) {
    async.parallel({
        comment: function (callback) {
            Comment.findById(req.params.id)
                .exec(callback);
        },

        comment_books: function (callback) {
            Book.find({'comment': req.params.id})
                .exec(callback);
        },

    }, function (err, results) {
        if (err) {
            return next(err);
        }
        if (results.comment == null) { // No results.
            var err = new Error('Comment not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('comment_detail', {
            title: 'Comment Detail',
            comment: results.comment,
            comment_books: results.comment_books
        });
    });
};

// Display comment create form on GET.
exports.comment_create_get = function (req, res, next) {
    res.render('comment_form', {title: 'Create Comment'});
};

// Handle Comment create on POST.
exports.comment_create_post = [

    // Validate and sanitise the name field.
    body('name', 'Comment name must contain at least 3 characters').trim().isLength({min: 3}).escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a Comment object with escaped and trimmed data.
        const comment = new Comment(
            {name: req.body.name}
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('comment_form', {title: 'Create Comment', comment: comment, errors: errors.array()});
            return;
        } else {
            // Data from form is valid.
            // Check if Comment with same name already exists.
            Comment.findOne({'name': req.body.name})
                .exec(function (err, found_Comment) {
                    if (err) {
                        return next(err);
                    }

                    if (found_Comment) {
                        // Comment exists, redirect to its detail page.
                        res.redirect(found_Comment.url);
                    } else {

                        Comment.save(function (err) {
                            if (err) {
                                return next(err);
                            }
                            // Comment saved. Redirect to Comment detail page.
                            res.redirect(Comment.url);
                        });

                    }

                });
        }
    }
];

// Display Comment delete form on GET.
exports.comment_delete_get = function (req, res, next) {

    async.parallel({
        Comment: function (callback) {
            Comment.findById(req.params.id).exec(callback);
        },
        comment_books: function (callback) {
            Book.find({'Comment': req.params.id}).exec(callback);
        },
    }, function (err, results) {
        if (err) {
            return next(err);
        }
        if (results.Comment == null) { // No results.
            res.redirect('/catalog/comments');
        }
        // Successful, so render.
        res.render('comment_delete', {
            title: 'Delete Comment',
            Comment: results.Comment,
            comment_books: results.comment_books
        });
    });
};

// Handle Comment delete on POST.
exports.comment_delete_post = function (req, res, next) {

    async.parallel({
        Comment: function (callback) {
            Comment.findById(req.params.id).exec(callback);
        },
        comment_books: function (callback) {
            Book.find({'Comment': req.params.id}).exec(callback);
        },
    }, function (err, results) {
        if (err) {
            return next(err);
        }
        // Success
        if (results.comment_books.length > 0) {
            // Comment has books. Render in same way as for GET route.
            res.render('comment_delete', {
                title: 'Delete Comment',
                Comment: results.Comment,
                comment_books: results.comment_books
            });
            return;
        } else {
            // Comment has no books. Delete object and redirect to the list of Comments.
            Comment.findByIdAndRemove(req.body.id, function deleteComment(err) {
                if (err) {
                    return next(err);
                }
                // Success - go to Comments list.
                res.redirect('/catalog/comments');
            });
        }
    });

};

// Display Comment update form on GET.
exports.comment_update_get = function (req, res, next) {

    Comment.findById(req.params.id, function (err, Comment) {
        if (err) {
            return next(err);
        }
        if (Comment == null) { // No results.
            var err = new Error('Comment not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('comment_form', {title: 'Update Comment', Comment: Comment});
    });

};

// Handle Comment update on POST.
exports.comment_update_post = [
    // Validate and sanitze the name field.
    body('name', 'Comment name must contain at least 3 characters').trim().isLength({min: 3}).escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request .
        const errors = validationResult(req);

        // Create a Comment object with escaped and trimmed data (and the old id!)
        var Comment = new Comment(
            {
                name: req.body.name,
                _id: req.params.id
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values and error messages.
            res.render('comment_form', {title: 'Update Comment', comment: comment, errors: errors.array()});
            return;
        } else {
            // Data from form is valid. Update the record.
            Comment.findByIdAndUpdate(req.params.id, comment, {}, function (err, theComment) {
                if (err) {
                    return next(err);
                }
                // Successful - redirect to Comment detail page.
                res.redirect(theComment.url);
            });
        }
    }
];