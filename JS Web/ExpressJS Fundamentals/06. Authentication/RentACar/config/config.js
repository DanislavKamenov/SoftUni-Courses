const path = require('path');

/*globals __dirname*/
module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/RentACar',
        port: 5000,
        rootPath: path.join(__dirname, '../'),
    },
    production: {}
};