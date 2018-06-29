const mongoose = require('mongoose');
const seeder = require('../utils/seeder');

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;

    database.once('open', () => {   
        console.log('Database connected!');

        database.db.listCollections({}).next((err, coll) => {
            if (err) {
                console.log(err);
                return;
            }

            if (!coll) {
                seeder.seedRolesAndAdmin();
                seeder.seedClasses();
            }
        });
    }).on('error', err => {
        console.log('Connection Error:');
        console.log(err);
    });    
};