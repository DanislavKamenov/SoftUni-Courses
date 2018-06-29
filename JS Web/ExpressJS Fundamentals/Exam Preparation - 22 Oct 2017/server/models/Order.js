const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const properyIsRequired = '{PATH} is required';


let orderSchema = mongoose.Schema({
  creator: { 
    type: ObjectId, ref: 'User',
    required: properyIsRequired.replace('{PATH}', 'Creator')
  },
  product: {
    type: ObjectId, ref: 'Product',
    required: properyIsRequired.replace('{PATH}', 'Product')
  },  
  dateOrdered: { type: mongoose.SchemaTypes.Date, default: Date.now },
  toppings: [{type: mongoose.SchemaTypes.String, default: 'No Toppings'}],
  status: { type: mongoose.SchemaTypes.String, default: 'Pending', enum: ['Pending', 'In Progress', 'In Transit', 'Delivered'] }
});

let Order = mongoose.model('Order', orderSchema);

module.exports = Order;