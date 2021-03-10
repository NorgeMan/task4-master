const Category = require('../models/Category')

class CategoryController {
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