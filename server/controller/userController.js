const User = require('../models/User')

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

    async create(first_name, family_name, d_birth, d_death, cb) {
        authordetail = {first_name:first_name , family_name: family_name }
        if (d_birth != false) authordetail.date_of_birth = d_birth
        if (d_death != false) authordetail.date_of_death = d_death

        var author = new Author(authordetail);

        author.save(function (err) {
            if (err) {
                cb(err, null)
                return
            }
            console.log('New Author: ' + author);
            authors.push(author)
            cb(null, author)
        }  );
    }
}




module.exports = new UserController()