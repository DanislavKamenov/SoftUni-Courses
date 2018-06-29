const router = require('express').Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const auth = require('../config/auth');

let customizeGet = (req, res) => {
  let id = req.params.id;
  
  Product
    .findById(id)
    .populate('category')
    .then(product => {
      res.render('orders/customize', {product});
    })
    .catch(err => {
      console.log(err);
      res.locals.globalError = 'Could not find order!';
      res.redirect('/');
    });
};

let customizePost = (req, res) => {
  let toppings = Object.values(req.body);
  let productId = toppings.shift();
    
  Order.create({
    creator: req.user._id,
    product: productId,
    toppings: toppings,
  }).then(order => {
    res.redirect(`/orders/details/${order._id}`);
  }).catch(err => {
    console.log(err);
    res.locals.globalError = 'Could not process order!';
    res.render(req.headers.referer);
  });
};

let detailsGet = (req, res) => {
  let orderId = req.params.id;

  Order.findById(orderId)
    .populate({
      path: 'product',
      populate: {
        path: 'category'
      }
    })    
    .then(order => {
      res.render('orders/details', {order});
    }).catch(err => {
      console.log(err);
      res.locals.globalError = 'Could not find order!';
      res.redirect('/orders/my-orders');
    });
};

let myOrdersGet = (req, res) => {
  let user = req.user;

  Order.find({creator: user._id})
    .populate({
      path: 'product',
      populate: {
        path: 'category'
      }
    })    
    .then(orders => {
      orders.map(o => o.parsedDate = o.dateOrdered.toLocaleDateString('en-US'));
      res.render('orders/my-orders', {orders});
    }).catch(err => {
      console.log(err);
      res.locals.globalError = 'Could not find profile!';
      res.redirect('/');
    });
};

let allOrdersGet = (req, res) => { 
  Order.find()
    .populate({
      path: 'product',
      populate: {
        path: 'category'
      }
    })    
    .then(orders => {
      orders.map(o => o.parsedDate = o.dateOrdered.toLocaleDateString('en-US'));
      res.render('orders/all-orders', {orders});
    }).catch(err => {
      console.log(err);
      res.locals.globalError = 'Could not find any orders!';
      res.redirect('/');
    });
};

let allOrdersPost = (req, res) => {
  let orderStatuses = req.body;
  let promises = [];
  for (let orderId in orderStatuses) {
    promises.push(Order.update({_id: orderId}, {status: orderStatuses[orderId]}, { runValidators: true }));
  }

  Promise.all(promises)
    .then(() => {
      res.redirect('/orders/all-orders');
    }).catch(err => {
      console.log(err);
      res.locals.globalError = 'Could not update order statuses!';
      res.redirect('/orders/all-orders');
    });
};
  
router
  .get('/customize/:id', auth.hasAllowedRole(['User']), customizeGet)
  .post('/customize/:id', auth.hasAllowedRole(['User']), customizePost)
  .get('/details/:id', auth.hasAllowedRole(['User']), detailsGet)
  .get('/my-orders', auth.hasAllowedRole(['User']), myOrdersGet)
  .get('/all-orders', auth.hasAllowedRole(['User']), allOrdersGet)
  .post('/all-orders', auth.hasAllowedRole(['User']), allOrdersPost);


module.exports = router;