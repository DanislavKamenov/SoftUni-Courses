const controllers = require('../controllers/');
const auth = require('../config/auth');

module.exports = (app) => {
    app.use('/', controllers.home);
    app.use('/user/', controllers.user);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found!');
        res.end();
    });
};