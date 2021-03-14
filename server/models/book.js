var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {type: String, required: true},
    author: { type: Schema.ObjectId, ref: 'Author', required: true },
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{ type: Schema.ObjectId, ref: 'Genre' }],

    // Added
    tags: [{type: Schema.ObjectId, ref: 'Tag'}],
    image: {
        cdnUri: String,
        files: []
    },
    lastModifiedBy: {type: String, default: "anonymous"},
    lastModified: {type: Date, default: Date.now()}
});

// Virtual for this book instance URL.
BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/'+this._id;
});

// Export model.
module.exports = mongoose.model('Book', BookSchema);
