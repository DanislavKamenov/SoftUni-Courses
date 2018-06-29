const mongoose = require('mongoose'); 

const draftSchema = mongoose.Schema({
    creator: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true
    },
    chosenMap: {
        type: String,
        required: true
    },
    teams: {
        teamOne: {
            type: String, required: true
        },
        teamTwo: {
            type: String, required: true
        },
    },
    winner: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User', default: null
    }   
});

const Draft = mongoose.model('Draft', draftSchema);

module.exports = Draft;