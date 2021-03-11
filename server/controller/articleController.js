const Article = require('../models/Article')
const only = require('only');
const {check, validationResult} = require("express-validator")
const assign = Object.assign;

class ArticleController {

    async get(req, res) {
        try {
            await Article.findById(req.params.article_id,
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            if(e.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.article_id
                });
            }
            console.log(e)
            res.status(500).send({message: "Server error"})
        }
    }

    async getAll(req, res) {
        try {
            await Article.find({},
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async getByTitle(req, res) {
        try {
            await Article.find({title: req.params.title},
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    /**
     * Create an article
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Incorrect request", errors})
        }
        const article = new Article(only(req.body, 'title description category tags'));
        try {
            article.author = req.user;
            await article.save();
            res.json({message: "Article has been created!"});

            //req.flash('success', 'Successfully created article!');
            //res.redirect('/articles/${article._id}');
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
            // res.status(422).render('articles/new', {
            //     title: article.title || 'New Article',
            //     errors: [e.toString()],
            //     article
            // });
        }
    }

    /**
     * Create an article
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async update(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Incorrect request", errors})
        }
        const article = req.article;
        assign(article, only(req.body, 'title description category tags'));
        try {
            article.author = req.user;
            await article.save();
            res.json({message: "Article has been updated!"});
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async delete(req, res) {
        await Article.findByIdAndDelete(req.params.id, function(err, results) {
            if (err){
                console.log("failed");
                throw err;
            }
            console.log("success");
        });
    }


    create(title, description, author, category, tags, callback) {
        const articleDetail = {
            title: title,
            description: description,
            author: author
        }
        if (category != false) {
            articleDetail.category = category;
        }
        if (tags != false) {
            articleDetail.tags = tags;
        }

        const article = new Article(articleDetail);
        article.save(function (err) {
            if (err) {
                callback(err, null)
                return
            }
            console.log('New article: ' + article);
            callback(null, article);
        });
    }
}

module.exports = new ArticleController()