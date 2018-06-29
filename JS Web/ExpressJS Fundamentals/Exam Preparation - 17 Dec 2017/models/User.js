const mongoose = require('mongoose');
const Role = require('./Role');
const propertyIsRequired = '{0} is required.';
const encryption = require('../utils/encryption');

const userSchema = mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Email'),
        unique: true,
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
    cart: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Cart'       
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

userSchema.statics.validateAndRegister = function(user) {
    return new Promise((resolve, reject) => {
        Role
            .findOne({name: 'User'})    
            .then(role => {                
                let salt = encryption.generateSalt();
                let hashedPassword = encryption.generateHashedPassword(salt, user.password);
                user.salt = salt;
                user.password = hashedPassword;
                user.roles = [role._id];
                User
                    .create(user)
                    .then(createdUser => {
                        resolve(createdUser);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }).catch(err => {
                reject(err);
            });
    });
};    

const User = mongoose.model('User', userSchema);

module.exports = User;