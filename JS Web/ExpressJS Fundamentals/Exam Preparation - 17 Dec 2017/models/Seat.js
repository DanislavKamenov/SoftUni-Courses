const mongoose = require('mongoose');

const propertyIsRequired = '{0} is required.';

let seatSchema = mongoose.Schema({
    count: {
        type: Number,
        required: propertyIsRequired.replace('{0}', 'Count')
    },
    price: {
        type: Number,
        required: propertyIsRequired.replace('{0}', 'Price')
    },
    type: {
        type: String,
        required: propertyIsRequired.replace('{0}', 'Type')
    },
    flight: {
        type: mongoose.SchemaTypes.ObjectId,
        required: propertyIsRequired.replace('{0}', 'flight')
    }
});

let Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;