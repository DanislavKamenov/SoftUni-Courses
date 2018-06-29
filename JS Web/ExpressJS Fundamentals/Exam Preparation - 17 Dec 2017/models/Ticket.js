const mongoose = require('mongoose');

const propertyIsRequired = '{0} is required.';

let ticketSchema = mongoose.Schema({
    flight: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Flight',
        required: propertyIsRequired.replace('{0}', 'Flight')
    },
    seatsInfo: [{
        type: { 
            type: mongoose.SchemaTypes.String,
            required: propertyIsRequired.replace('{0}', 'Type')
        },
        price: {
            type: mongoose.SchemaTypes.Number,
            required: propertyIsRequired.replace('{0}', 'Type')
        },
        ammount: {
            type: mongoose.SchemaTypes.Number,
            required: propertyIsRequired.replace('{0}', 'Number'),
            min: 1
        }
    }],
    isPaid: {
        type: Boolean,
        default: false
    }
});

ticketSchema.virtual('subTotal').get(function() {
    let subTotal = 0;
    for (let prop of this.seatsInfo) {
        subTotal += prop.price * prop.ammount;
    }
    return subTotal;
});

ticketSchema.virtual('totalAmmount').get(function() {
    let ammount = 0;
    for (let prop of this.seatsInfo) {
        ammount += prop.ammount;
    }
    return ammount;
});

let Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;