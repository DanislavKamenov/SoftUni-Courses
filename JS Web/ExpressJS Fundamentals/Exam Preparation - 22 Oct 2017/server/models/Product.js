const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const properyIsRequired = '{PATH} is required';

let productSchema = mongoose.Schema({
  category: {
    type: ObjectId, ref: 'Category',
    required: properyIsRequired.replace('{PATH}', 'Category')
  },
  size: {
    type: mongoose.SchemaTypes.Number,
    min:17,
    max:24,
    required: properyIsRequired.replace('{PATH}', 'Size')
  },
  image:{
    type: mongoose.SchemaTypes.String,
    required: properyIsRequired.replace('{PATH}', 'Image URL')
  },
  toppings: [{ type: mongoose.SchemaTypes.String }]
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;