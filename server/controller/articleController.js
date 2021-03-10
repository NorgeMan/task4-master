const Article = require('../models/Article')

class ArticleController {
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