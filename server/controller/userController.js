const User = require('../models/user')

class UserController {
    async getByEmail(req, res) {
        try {
            const user = await User.findOne({email: req.params.email})
            return res.json([
                {
                    id: user.id,
                    email: user.email,
                    avatar: user.avatar
                }
            ])
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async getUsers(req, res) {
        await User.find({}, 'title author')
            .populate('user').exec(function (err, list_users) {
                if (err) {
                    console.log(err)
                    // res.send({message: "Server error"})
                    return next(err)
                } else {
                    // console.log("found data: " + list_users)
                    return res.json({title: 'User List', user_list: list_users});
                }
            });
    }
}

module.exports = new UserController()