const mongoose = require('mongoose');
const propertyIsRequired = '{0} is required.';

const carSchema = mongoose.Schema({
    model: {
        type: mongoose.SchemaTypes.String, 
        required: propertyIsRequired.replace('{0}', 'Model')
    },
    image: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Image Address')
    },
    km: {
        type: mongoose.SchemaTypes.Number,
        required: propertyIsRequired.replace('{0}', 'Kilometers')
    },
    color: {
        type: mongoose.SchemaTypes.String
    },
    priceClass: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'PriceClass',
        required: propertyIsRequired.replace('{0}', 'Price Class')
    },
    pricePerDay: {
        type: mongoose.SchemaTypes.Number,
        required: propertyIsRequired.replace('{0}', 'Price Per Day')
    },
    isRented: {
        type: mongoose.SchemaTypes.Boolean,
        default: false
    },
    rentedBy: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User',
        default: null        
    },
    rentDuration: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;