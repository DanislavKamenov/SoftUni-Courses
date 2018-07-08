const mongoose = require('mongoose');
const mapSevice = require('../services/mapService');

const draftSchema = mongoose.Schema({
    creator: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true
    },
    chosenMap: {
        type: String
    },
    participants: {
        teamOne: {
            team: { type: String, default: 'teamOne' },
            url: { type: String, required: true },
            name: { type: String, required: true },
            isReady: { type: Boolean, default: false }
        },
        teamTwo: {
            team: { type: String, default: 'teamTwo' },
            url: { type: String, required: true },
            name: { type: String, required: true },
            isReady: { type: Boolean, default: false }
        },
        observer: {
            team: { type: String, default: 'observer' },
            url: { type: String, required: true },
        }
    },
    winner: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User', default: null
    },
    maps: [{
        name: { type: String, required: true },
        isAllowed: { type: Boolean, required: true }
    }],
    banCount: {
        type: String, required: true
    },
    isOnTurn: {
        type: String
    },
    _allUrls: { type: Array, required: true },
    _createdAt: { type: Date, default: Date.now },
    _expiresAt: { type: Date }
});

draftSchema.pre('save', function (next) {
    if (!this._expiresAt) {
        this._expiresAt = this._createdAt.getTime() + 15 * 60000;
    }
    if (this.maps.length === 0) {
        mapSevice
            .getAll()
            .then((maps) => {
                this.maps = maps.map(m => ({ name: m.name, isAllowed: true }));
                next();
            }).catch(console.log);
        return;
    }
    next();
});

const Draft = mongoose.model('Draft', draftSchema);

module.exports = Draft;