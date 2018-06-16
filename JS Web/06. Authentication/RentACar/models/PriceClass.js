const mongoose = require('mongoose');

const priceClassSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    cars: {
        type: [mongoose.SchemaTypes.ObjectId], ref: 'Car'
    }
});

const PriceClass = mongoose.model('PriceClass', priceClassSchema);

module.exports = PriceClass;