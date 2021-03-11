var Tag = require('../models/tag')
var Book = require('../models/book');
var async = require('async');

const {body, validationResult} = require("express-validator");

// Display list of all Tag.
exports.tag_list = function (req, res, next) {
    Tag.find()
        .sort([['name', 'ascending']])
        .exec(function (err, list_tags) {
            if (err) {
                return next(err);
            }
            // Successful, so render.
            res.render('tag_list', {title: 'Tag List', list_tags: list_tags});
        });

};

// Display detail page for a specific Tag.
exports.tag_detail = function (req, res, next) {
    async.parallel({
        tag: function (callback) {
            Tag.findById(req.params.id)
                .exec(callback);
        },

        tag_books: function (callback) {
            Book.find({'tag': req.params.id})
                .exec(callback);
        },

    }, function (err, results) {
        if (err) {
            return next(err);
        }
        if (results.tag == null) { // No results.
            var err = new Error('Tag not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('tag_detail', {title: 'Tag Detail', tag: results.tag, tag_books: results.tag_books});
    });

};

// Display Tag create form on GET.
exports.tag_create_get = function (req, res, next) {
    res.render('tag_form', {title: 'Create Tag'});
};

// Handle Tag create on POST.
exports.tag_create_post = [

    // Validate and santise the name field.
    body('name', 'Tag name must contain at least 3 characters').trim().isLength({min: 3}).escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        const tag = new Tag(
            {name: req.body.name}
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('tag_form', {title: 'Create Tag', tag: tag, errors: errors.array()});
            return;
        } else {
            // Data from form is valid.
            // Check if Tag with same name already exists.
            Tag.findOne({'name': req.body.name})
                .exec(function (err, found_tag) {
                    if (err) {
                        return next(err);
                    }

                    if (found_tag) {
                        // Genre exists, redirect to its detail page.
                        res.redirect(found_tag.url);
                    } else {
                        Tag.save(function (err) {
                            if (err) {
                                return next(err);
                            }
                            // Genre saved. Redirect to genre detail page.
                            res.redirect(tag.url);
                        });
                    }
                });
        }
    }
];

// Display Tag delete form on GET.
exports.tag_delete_get = function (req, res, next) {

    async.parallel({
        tag: function (callback) {
            Tag.findById(req.params.id).exec(callback);
        },
        tag_books: function (callback) {
            Book.find({'tag': req.params.id}).exec(callback);
        },
    }, function (err, results) {
        if (err) {
            return next(err);
        }
        if (results.tag == null) { // No results.
            res.redirect('/catalog/tags');
        }
        // Successful, so render.
        res.render('tag_delete', {title: 'Delete tag', tag: results.tag, tag_books: results.tag_books});
    });
};

// Handle Tag delete on POST.
exports.tag_delete_post = function (req, res, next) {

    async.parallel({
        tag: function (callback) {
            Tag.findById(req.params.id).exec(callback);
        },
        tag_books: function (callback) {
            Book.find({'tag': req.params.id}).exec(callback);
        },
    }, function (err, results) {
        if (err) {
            return next(err);
        }
        // Success
        if (results.tag_books.length > 0) {
            // Tag has books. Render in same way as for GET route.
            res.render('tag_delete', {title: 'Delete tag', tag: results.tag, tag_books: results.tag_books});
            return;
        } else {
            // Genre has no books. Delete object and redirect to the list of genres.
            Tag.findByIdAndRemove(req.body.id, function deleteTag(err) {
                if (err) {
                    return next(err);
                }
                // Success - go to genres list.
                res.redirect('/catalog/tags');
            });

        }
    });

};

// Display Tag update form on GET.
exports.tag_update_get = function (req, res, next) {
    Tag.findById(req.params.id, function (err, tag) {
        if (err) {
            return next(err);
        }
        if (tag == null) { // No results.
            var err = new Error('Tag not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('tag_form', {title: 'Update Tag', tag: tag});
    });

};

// Handle Tag update on POST.
exports.tag_update_post = [
    // Validate and sanitize the name field.
    body('name', 'Tag name must contain at least 3 characters').trim().isLength({min: 3}).escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request .
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data (and the old id!)
        var tag = new Tag(
            {
                name: req.body.name,
                _id: req.params.id
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values and error messages.
            res.render('tag_form', {title: 'Update Tag', tag: tag, errors: errors.array()});
            return;
        } else {
            // Data from form is valid. Update the record.
            Tag.findByIdAndUpdate(req.params.id, tag, {}, function (err, theTags) {
                if (err) {
                    return next(err);
                }
                // Successful - redirect to genre detail page.
                res.redirect(theTags.url);
            });
        }
    }
];