const {Schema, model, ObjectId} = require("mongoose")

const Profile = new Schema({
    user: {type: ObjectId, ref:'User'},

    lastModifiedBy: {type: String, default: "anonymous"},
    lastModified: {type: Date, default: Date.now()}
})

module.exports = model('Profile', Profile)