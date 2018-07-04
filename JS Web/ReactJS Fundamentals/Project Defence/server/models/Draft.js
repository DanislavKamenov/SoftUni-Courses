const mongoose = require('mongoose'); 

const draftSchema = mongoose.Schema({
    creator: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true
    },
    chosenMap: {
        type: String
    },
    participants: {
        teamOne: {
            url: { type: String, required: true },
            name: { type: String, required: true }            
        },
        teamTwo: {
            url: { type: String, required: true },
            name: { type: String, required: true }    
        },
        observer: {
            url: { type: String, required: true },
        }        
    },
    winner: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User', default: null
    },  
    _allUrls: {type: Array, required: true} 
});

const Draft = mongoose.model('Draft', draftSchema);

module.exports = Draft;