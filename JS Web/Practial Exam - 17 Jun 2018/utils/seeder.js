const Role = require('../models/Role');
const User = require('../models/User');
const encryption = require('../utils/encryption');

module.exports = {
    seedRolesAndAdmin: () => {         
        return new Promise((resolve, reject) => {
            Role
                .insertMany([{name: 'Admin'}, {name: 'User'}])
                .then((roles) => {
                    console.log('Roles Seeded!');

                    let salt = encryption.generateSalt();
                    let hashedPass = encryption.generateHashedPassword(salt, '123');
                    let admin = {
                        email: 'admin@a.bg',                        
                        password: hashedPass,
                        salt: salt,                        
                        roles: [roles[0]._id, roles[1]._id]
                    };

                    User
                        .create(admin)
                        .then((user) => {
                            resolve(user);
                        }).catch(err => {
                            reject(err);
                        });
                })
                .catch(err => {
                    reject(err);
                });           
         
        });
    },
    seedUser(username, email, pwd, newRoles) {
        Role.find({name: {$in: newRoles}})
            .then(roles => {
                let salt = encryption.generateSalt();
                let hashedPass = encryption.generateHashedPassword(salt, pwd);
                let normalUser = {                    
                    email: email,
                    password: hashedPass,
                    salt: salt,                    
                    roles: roles.map(r => r._id)
                };

                User
                    .create(normalUser)
                    .then((user) => {                              
                        console.log(`${user.email} seeded!`);
                    }).catch(err => {
                        console.log(err);
                    });   
            
            });
    }
};