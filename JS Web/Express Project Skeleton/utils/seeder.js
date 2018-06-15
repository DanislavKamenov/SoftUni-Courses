const Role = require('../models/Role');
const User = require('../models/User');
const encryption = require('../utils/encryption');

module.exports = {
    seedRolesAndAdmin: () => {         
        Role
            .insertMany([{name: 'Admin'}, {name: 'User'}])
            .then((roles) => {
                console.log('Roles Seeded!');

                let salt = encryption.generateSalt();
                let hashedPass = encryption.generateHashedPassword(salt, '123');
                let admin = {
                    username: 'Danisimo',
                    password: hashedPass,
                    salt: salt,
                    firstName: 'Denk',
                    lastName: 'Denkov',
                    age: 24,
                    roles: roles[0]._id
                };

                User
                    .create(admin)
                    .then((user) => {
                        roles[0].users.push(user._id);
                        roles[0].save();
                        console.log('Admin seeded!');
                    }).catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
            
         
    }
};