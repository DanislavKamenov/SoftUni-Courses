const mongoose = require('mongoose');

const propertyIsRequired = '{0} is required.';

let cartSchema = mongoose.Schema({
    tickets: [ {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Ticket'        
    }
    ],
    user: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'User',
        required: propertyIsRequired.replace('{0}', 'User')
    }
});

let Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;