const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {
        type: String, required: true
    },
    isLocked: {
        type: Boolean, default: false
    },
    edits: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Edit', default: []
    }],
    creationDate: {
        type: Date, default: Date.now
    }
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;