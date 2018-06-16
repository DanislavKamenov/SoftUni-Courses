const controllers = require('../controllers/');

module.exports = (app) => {
    app.use('/', controllers.home);
    app.use('/user/', controllers.user);
    app.use('/cars/', controllers.car);
};