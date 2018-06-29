const home = require('./home-controller');
const users = require('./users-controller');
const products = require('./product-controller');
const orders = require('./order-controller');

module.exports = {
  home: home,
  users: users,
  products: products,
  orders: orders
};
