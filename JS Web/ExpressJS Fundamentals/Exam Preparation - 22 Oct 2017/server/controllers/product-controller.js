const router = require('express').Router();
const Category = require('../models/Category');
const Product = require('../models/Product');

let createGet = (req, res) => {
  res.render('products/create');
};

let createPost = (req, res) => {
  let productToAdd = req.body;
  if (productToAdd.toppings) {
    productToAdd.toppings = productToAdd.toppings.split(',');
  } else {
    productToAdd.toppings = 'No toppings!';
  }

  Category.findOne({name: productToAdd.category})
    .then(category => {
      if (!category) {
        res.locals.globalError = 'Invalid Category';
        return res.render('products/create');
      }
      productToAdd.category = category._id;      
      Product.create(productToAdd)
        .then((product) => {
          category.products.push(product._id);
          category.save();
          res.redirect('/');
        }).catch(err => {
          console.log(err);
          res.locals.globalError = 'Could not create product!';
          return res.render('products/create');
        });
    }).catch(err => {
      console.log(err);
      res.locals.globalError = 'Could not find category!';
      return res.render('products/create');
    });
};

let deleteGet = (req, res) => {
  let id = req.params.id;

  Product.findByIdAndRemove(id)    
    .then(product => {
      Category.update({_id: product.category}, {$pull: {products: product._id}}, {runValidators: true})
        .then(() => {
          res.redirect('/');
        }).catch(err => {
          console.log(err);
          res.redirect('/');
        });      
    }).catch(err => {
      console.log(err);
      res.locals.globalError = 'Could not delete product!';
      res.redirect('/');
    });
};

let editGet = (req, res) => {
  let id = req.params.id;

  Product.findById(id)
    .populate('category')  
    .then(product => {
      res.render('products/create', {product});
    }).catch(err => {
      console.log(err);
      res.locals.globalError = 'Coud not find product!';
      res.render('products/create');
    });
};

let editPost = (req, res) => {
  let id = req.params.id;
  let productToEdit = req.body;
  
  Product.findByIdAndUpdate(id, 
    {$set: { 
      size: productToEdit.size, 
      image: productToEdit.image, 
      toppings: productToEdit.toppings.split(',')
    }},
    {runValidators: true}
  )
    .populate('category')  
    .then((product) => {
      if (product.category.name !== productToEdit.category) {

        Promise.all([
          Category.findOneAndUpdate({name: product.category.name}, {$pull: {products: product._id}}, {runValidators: true}),
          Category.findOneAndUpdate({name: productToEdit.category}, {$push: {products: product._id}}, {runValidators: true}),
        ]).then(([oldCat, newCat]) => {
          product.category = newCat;
          product.save();
          res.redirect('/');
        }).catch(err => {
          console.log(err);
          res.locals.globalError = 'Could not update product!';
          res.render('product/create', {product});
        });
        return;
      }

      res.redirect('/');
    }).catch(err => {
      console.log(err);
      Product.findById(id)
        .then(product => {
          res.locals.globalError = 'Could not update product!';
          res.render('products/create', {product});
        }).catch(err => {
          console.log(err);
          res.locals.globalError = 'Could not find product';
          res.render('products/create');
        });
    });
};

router
  .get('/create', createGet)
  .post('/create', createPost)
  .get('/delete/:id', deleteGet)
  .get('/edit/:id', editGet)
  .post('/edit/:id', editPost);

module.exports = router;