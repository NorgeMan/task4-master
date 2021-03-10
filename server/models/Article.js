const {Schema, model, ObjectId} = require("mongoose")

const Article = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    author: {type: ObjectId, required: true, ref: 'User'},
    category: {type: ObjectId, ref: 'Category'},
    tags: [{type: ObjectId, ref: 'Tag'}],

    lastModifiedBy: {type: String, default: "admin_user@gmail.com"},
    lastModified: {type: Date, default: Date.now()}
})

module.exports = model('Article', Article)