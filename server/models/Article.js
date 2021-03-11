const {Schema, model, ObjectId} = require("mongoose")

const Article = new Schema({
    title: {type: String, maxlength: 400, trim: true, required: true, unique: true},
    description: {type: String, maxlength: 2000, trim: true, required: true},
    category: {type: ObjectId, ref: 'Category'},

    author: {type: ObjectId, ref: 'User'},
    tags: [{type: ObjectId, ref: 'Tag'}],
    image: {
        cdnUri: String,
        files: []
    },

    lastModifiedBy: {type: String, default: "anonymous"},
    lastModified: {type: Date, default: Date.now()}
})

module.exports = model('Article', Article)