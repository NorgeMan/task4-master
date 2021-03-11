const {Schema, model} = require("mongoose")

const Tag = new Schema({
    name: {type: String, maxlength: 20, trim: true, required: true, unique: true}
})

module.exports = model('Tag', Tag)