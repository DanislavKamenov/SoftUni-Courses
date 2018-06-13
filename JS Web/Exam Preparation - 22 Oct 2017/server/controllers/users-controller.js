const router = require('express').Router();
const encryption = require('../utilities/encryption');
const User = require('mongoose').model('User');
const Role = require('../models/Role');


let registerGet = (req, res) => {
  res.render('users/register');
};

let registerPost = (req, res) => {
  let reqUser = req.body;
  if (reqUser.password !== reqUser.repeatPass) {
    res.locals.globalError = 'Passwords do not match!';
    return res.render('users/register');
  }

  let salt = encryption.generateSalt();
  let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password);

  Role.findOne({name: 'User'})
    .then(role => {
      User.create({
        username: reqUser.username,
        firstName: reqUser.firstName,
        lastName: reqUser.lastName,
        salt: salt,
        hashedPass: hashedPassword,
        roles: [role._id]
      }).then(user => {
        req.logIn(user, (err, user) => {
          if (err) {
            res.locals.globalError = err;
            res.render('users/register', user);
          }
    
          res.redirect('/');
        });
      }).catch(() => {
        res.locals.globalError = 'Could not create User!';
        res.render('users/register');
      });
    });
};
let loginGet = (req, res) => {
  res.render('users/login');
};
let loginPost = (req, res) => {
  let reqUser = req.body;
  User
    .findOne({ username: reqUser.username }).then(user => {
      if (!user) {
        res.locals.globalError = 'Invalid user data';
        res.render('users/login');
        return;
      }

      if (!user.authenticate(reqUser.password)) {
        res.locals.globalError = 'Invalid user data';
        res.render('users/login');
        return;
      }

      req.logIn(user, (err, user) => {
        if (err) {
          res.locals.globalError = err;
          return res.render('users/login');
        }

        res.redirect('/');
      });
    });
};
let logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

router
  .get('/register*', registerGet)
  .post('/register', registerPost)
  .get('/login*', loginGet)
  .post('/login', loginPost)
  .get('/logout', logout);

module.exports = router;