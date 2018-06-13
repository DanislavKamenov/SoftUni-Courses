const controllers = require('../controllers');
const auth = require('../config/auth');

module.exports = (app) => {
  app.use('/', controllers.home);
  app.use('/users/', controllers.users);
  app.use('/products/', auth.hasAllowedRole(['Admin']), controllers.products);
  app.use('/orders/', controllers.orders);

  app.all('*', (req, res) => {
    res.status(404);
    res.send('404 Not Found!');
    res.end();
  });
};
