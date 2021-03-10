const {Schema, model, ObjectId} = require("mongoose")

const UserProfile = new Schema({
    user: {type: ObjectId, ref:'User'},

    lastModifiedBy: {type: String},
    lastModified: {type: Date, default: Date.now()}
})

module.exports = model('UserProfile', UserProfile)