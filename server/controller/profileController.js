const Profile = require('../models/Profile')

class ProfileController {
    async getAll(req, res) {
        try {
            await Profile.find({},
                function (err, articles) {
                    res.send(articles);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async getByUserId(req, res) {
        try {
            await Profile.find({user_id: req.params.user_id},
                function (err, articles) {
                    res.send(articles);
                });
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
}

module.exports = new ProfileController()