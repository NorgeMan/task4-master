const Category = require('../models/Category')

class CategoryController {

    async get(req, res) {
        try {
            await Article.findById(req.params.id,
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            if(e.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.id
                });
            }
            console.log(e)
            res.status(500).send({message: "Server error"})
        }
    }

    async getAll(req, res) {
        try {
            await Category.find({},
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async getByName(req, res) {
        try {
            await Category.find({name: req.params.name},
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
}

module.exports = new CategoryController()