const path = require('path');

/*globals __dirname*/
module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/hotsDraft', //DB NAME HERE
        port: 5000,
        rootPath: path.join(__dirname, '../'),
    },
    production: {},
    jwt: {
        secret: 'D3nK@7@\'S r@nd0M s741nG.',
        duration: '1h'
    }
};