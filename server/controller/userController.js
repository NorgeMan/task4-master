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
        try {
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