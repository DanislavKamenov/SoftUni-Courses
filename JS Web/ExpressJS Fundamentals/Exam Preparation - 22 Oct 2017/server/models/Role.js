const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const properyIsRequired = '{PATH} is required';

let roleSchema = mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: properyIsRequired.replace('{PATH}', 'Name'),
    unique: true,
  },
  users: [{ type: ObjectId, ref: 'User' }]
});

let Role = mongoose.model('Role', roleSchema);

module.exports = Role;