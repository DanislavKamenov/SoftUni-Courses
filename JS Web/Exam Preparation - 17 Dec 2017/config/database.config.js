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
                //This seeds admin user and roles if there is no Database.
                //If you want to reseed the data please DROP the current Database.
                seeder.seedRolesAndAdmin();               
            }
        });
    }).on('error', err => {
        console.log('Connection Error:');
        console.log(err);
    });    
};