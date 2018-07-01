const mongoose = require('mongoose');
const Role = require('./Role');
const propertyIsRequired = '{0} is required.';
const encryption = require('../utils/encryption');

const userSchema = mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Email'),
        unique: true
    },
    name: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Name'),        
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Password'),
    },
    salt: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Salt'),
    },    
    roles: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Role',
        required: propertyIsRequired.replace('{0}', 'Role'),
    }]    
});

userSchema.method({
    authenticate: function(password) {
        let hashedPassword = encryption.generateHashedPassword(this.salt, password);

        if (hashedPassword === this.password) {
            return true;
        }
        return false;
    } 
});

userSchema.pre('validate', function(next) {
    this.salt = encryption.generateSalt();
    this.password = encryption.generateHashedPassword(this.salt, this.password);
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;