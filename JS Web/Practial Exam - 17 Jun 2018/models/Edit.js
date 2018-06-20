const mongoose = require('mongoose');

let editSchema = mongoose.Schema({
    author: {
        type: String, required: true
    },
    creationDate: {
        type: Date, default: Date.now,
    },
    content: {
        type: String, required: true,
    },    
    article: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Article', required: true
    }
});

editSchema.virtual('contents')
    .get(function() {
        return this.content.split(/\r\n|\r|\n/g).filter(c => c !== '');
    });

let Edit = mongoose.model('Edit', editSchema);

module.exports = Edit;