const mongoose = require('mongoose');

const propertyIsRequired = '{0} is required.';

let flightSchema = mongoose.Schema({
    origin: {
        type: String,
        required: propertyIsRequired.replace('{0}', 'Origin')
    },
    destination: {
        type: String,
        required: propertyIsRequired.replace('{0}', 'Destination')
    },
    public: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        required: propertyIsRequired.replace('{0}', 'Image')
    },
    departureDate: {
        type: Date,
        required: propertyIsRequired.replace('{0}', 'Departure Date')
    },
    departureTime: { 
        type: String,
        required: propertyIsRequired.replace('{0}', 'Departure Time')
    },
    seats: [{ 
        type: mongoose.SchemaTypes.ObjectId, ref: 'Seat',
        required: propertyIsRequired.replace('{0}', 'Seat')
    }]
});

let Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;