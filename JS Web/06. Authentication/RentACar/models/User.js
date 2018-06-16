const mongoose = require('mongoose');
const Role = require('./Role');
const propertyIsRequired = '{0} is required.';
const encryption = require('../utils/encryption');

const userSchema = mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Username'),
        unique: true
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Password'),
    },
    salt: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Salt'),
    },
    firstName: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'First Name')
    }, 
    lastName: {
        type: mongoose.SchemaTypes.String,
        required: propertyIsRequired.replace('{0}', 'Last Name'),
    },
    age: {
        type: mongoose.SchemaTypes.Number,        
    },
    roles: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Role',
        required: propertyIsRequired.replace('{0}', 'Role'),
    }],
    carsRented: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Car'}]    
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

userSchema.statics.validateForRegister = function(user) {
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
                        role.users.push(createdUser._id);
                        role.save();
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