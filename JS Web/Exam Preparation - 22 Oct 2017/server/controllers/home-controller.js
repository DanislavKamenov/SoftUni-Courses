const router = require('express').Router();
const Category = require('../models/Category');
const auth = require('../config/auth');

let index = (req, res) => {
  Category
    .find()
    .populate('products')
    .then(categories => {
      res.render('home/index', {categories});
    })
    .catch(err => {
      console.log(err);
    });

};

let about = (req, res) => {
  res.render('home/about');
};

router
  .get('/', index)
  .get('/index.html', index)
  .get('/about', auth.isAuthenticated, about);

module.exports = router;