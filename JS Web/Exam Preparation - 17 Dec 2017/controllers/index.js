const homeController = require('./home');
const userController = require('./user');
const flightsController = require('./flights');
const seatsController = require('./seats');
const cartController = require('./cart');

module.exports = {
    home: homeController,
    user: userController,
    flights: flightsController,
    seats: seatsController,
    cart: cartController
};