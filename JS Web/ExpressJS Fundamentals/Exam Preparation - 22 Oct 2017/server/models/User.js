const mongoose = require('mongoose');
const encryption = require('../utilities/encryption');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const properyIsRequired = '{PATH} is required';

let userSchema = new mongoose.Schema({
  username: { type: String, required: properyIsRequired.replace('{PATH}', 'Username'), unique: true },
  firstName: { type: String, required: properyIsRequired.replace('{PATH}', 'First Name') },
  lastName: { type: String, required: properyIsRequired.replace('{PATH}', 'Last Name') },
  orders: { type: [ObjectId], ref: 'Order', default: []},
  salt: String,
  hashedPass: String,
  roles: [{ type: ObjectId, ref: 'Role' }]
});

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
  }
});

let User = mongoose.model('User', userSchema);

module.exports = User;