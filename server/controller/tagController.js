const Tag = require('../models/Tag')

class TagController {
    async getAll(req, res) {
        try {
            await Tag.find({},
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
            await Tag.find({name: req.params.name},
                function (err, results) {
                    res.send(results);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
}

module.exports = new TagController()