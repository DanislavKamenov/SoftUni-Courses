const controllers = require('../controllers/');
const auth = require('./auth');

module.exports = (app) => {
    app.use('/', controllers.home);
    app.use('/user/', controllers.user);
    app.use('/flights/', controllers.flights);
    app.use('/seats/', auth.isAllowedRole('Admin'), controllers.seats);
    app.use('/cart/', auth.isAuthenticated, controllers.cart);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found!');
        res.end();
    });
};