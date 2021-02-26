const User = require('../models/User')

class UserController {
    async getUsers(req, res) {
        try {
            // await User.find({}, function (err, users) {
            //     res.send(users);
            // });

            const user = await User.findOne({email: 'ivan.veremeichik@mail.ru'})
            return res.json( [
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
}
module.exports = new UserController()