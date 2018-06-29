const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const properyIsRequired = '{PATH} is required';

let categorySchema = mongoose.Schema({
  name: { 
    type: mongoose.SchemaTypes.String,
    required: properyIsRequired.replace('{PATH}', 'Name'),
    unique: true
  },
  products: [{ type: ObjectId, ref: 'Product' }]
});

let Category = mongoose.model('Category', categorySchema);

module.exports = Category;