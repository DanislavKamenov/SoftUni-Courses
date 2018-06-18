const path = require('path');

/*globals __dirname*/
module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/softuniWIki', //DB NAME HERE
        port: 5000,
        rootPath: path.join(__dirname, '../'),
    },
    production: {}
};