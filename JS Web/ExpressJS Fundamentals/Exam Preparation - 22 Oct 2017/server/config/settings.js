const path = require('path');

/*globals __dirname process*/
let rootPath = path.normalize(path.join(__dirname, '/../../'));

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/DonerPalace',
    port: 5000
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
};
