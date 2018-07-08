const Role = require('../models/Role');
const User = require('../models/User');
const mapService = require('../services/mapService');

module.exports = {
    seedRolesAndAdmin: () => {
        return new Promise((resolve, reject) => {
            Role
                .insertMany([{ name: 'Admin' }, { name: 'User' }])
                .then((roles) => {
                    console.log('Roles Seeded!');

                    let admin = {
                        email: 'admin@admin.bg',
                        name: 'Admin',
                        password: '123',
                        roles: [roles[0]._id, roles[1]._id]
                    };

                    User
                        .create(admin)
                        .then((user) => {
                            console.log('Admin seeded!');
                            let maps = [{ name: 'Alterac Valley' }, { name: 'Haunted Mines' }, { name: 'Garden of Terror' },
                                { name: 'Dragon Shire' }, { name: 'Towers of Doom' }, { name: 'Volskaya Industries' }];
                            mapService.create(maps).then(() => {
                                console.log('Map seeded!');
                            }).catch(err => console.log(err));
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
    seedUser(email, name, pwd, newRoles) {
        Role.find({ name: { $in: newRoles } })
            .then(roles => {
                let normalUser = {
                    email: email,
                    name: name,
                    password: pwd,
                    roles: roles.map(r => r._id)
                };

                User
                    .create(normalUser)
                    .then((user) => {
                        console.log(`${user.name} seeded!`);
                    }).catch(err => {
                        console.log(err);
                    });

            });
    }
};