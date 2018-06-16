const homeController = require('./home');
const userController = require('./user');
const carController = require('./car');

module.exports = {
    home: homeController,
    user: userController,
    car: carController
};