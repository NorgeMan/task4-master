const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    files: [{type: ObjectId, ref:'File'}],

    lastModifiedBy: {type: String},
    lastModified: {type: Date, default: Date.now()}
})

module.exports = model('User', User)