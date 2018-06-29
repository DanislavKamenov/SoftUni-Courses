const mongoose = require('mongoose');

const mapSchema = mongoose.Schema({
    name: { type: String, required: true }
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;