const Comment = require('../models/Comment')

class CommentController {
    async getAll(req, res) {
        try {
            await Comment.find({},
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async getByArticleId(req, res) {
        try {
            await Comment.find({article_id: req.params.article_id},
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
}

module.exports = new CommentController()