const path = require('path');

/*globals __dirname*/
module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/ShopStop',
        rootPath: path.join(__dirname, '../'),
    },

    production: {

    }
};