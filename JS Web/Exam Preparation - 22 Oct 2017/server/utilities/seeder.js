const User = require('../models/User');
const Role = require('../models/Role');
const Product = require('../models/Product');
// const Order = require('../models/Order');
const Category = require('../models/Category');
const encryption = require('./encryption');

let productsToAdd = require('./products');

module.exports = {
  seedRolesAndAdmin: () =>{
    console.log('Seeding Roles and Admin');
    Role.insertMany([{name: 'Admin'}, {name: 'User'}])
      .then(roles => {
        let salt = encryption.generateSalt();
        let hashedPass = encryption.generateHashedPassword(salt, '123');

        User.create({
          username: 'Admin',
          firstName: 'Denk',
          lastName: 'Denkov',
          salt: salt,
          hashedPass: hashedPass,
          roles: [roles[0]._id, roles[1]._id]
        }).then(user => {
          roles[0].users.push(user._id);
          roles[0].save();
        }).catch(err => {
          console.log('Admin Seeding Failed!');
          console.log(err);
        });
      }).catch(err => {
        console.log('Role Seeding Failed!');
        console.log(err);
      });
  },
  seedCategoriesAndProducts: () => {
    console.log('Seeding categories and products');
    Category.insertMany([{name: 'Chicken'}, {name: 'Lamb'}, {name: 'Beef'}])
      .then(categories => {
        productsToAdd.map(p => p.category = categories[0]._id);
        Product.insertMany(productsToAdd)
          .then(products => {
            categories[0].products = products.filter(p => p._id);
            categories[0].save();
          }).catch(err => {
            console.log('Product Seeding Failed!');
            console.log(err);
          });
      }).catch(err => {
        console.log('Category Seeding Failed');
        console.log(err);
      });
  }
};