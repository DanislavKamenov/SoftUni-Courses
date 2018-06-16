const Role = require('../models/Role');
const User = require('../models/User');
const Cart = require('../models/Cart');
const encryption = require('../utils/encryption');

module.exports = {
    seedRolesAndAdmin: () => {         
        Role
            .insertMany([{name: 'User'}, {name: 'Admin'}])
            .then((roles) => {
                console.log('Roles Seeded!');

                let salt = encryption.generateSalt();
                let hashedPass = encryption.generateHashedPassword(salt, '123');
                let admin = {
                    email: 'asd@dsa.bg',
                    name: 'Danisimo',
                    password: hashedPass,
                    salt: salt,                    
                    roles: [roles[0]._id, roles[1]._id]
                };

                User
                    .create(admin)
                    .then((user) => {
                        Cart.create({user: user._id})
                            .then(cart => {
                                user.cart = cart._id;
                                user.save();
                            }).catch(err => {
                                console.log(err);
                            });
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