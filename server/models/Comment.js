const {Schema, model, ObjectId} = require("mongoose")

const Comment = new Schema({
    description: {type: String, maxlength: 1000 },
    article: {type: ObjectId, required: true, ref: 'Article'},
    user: {type: ObjectId, ref: 'User'},

    lastModifiedBy: {type: String},
    lastModified: {type: Date, default: Date.now()}
})

module.exports = model('Comment', Comment)