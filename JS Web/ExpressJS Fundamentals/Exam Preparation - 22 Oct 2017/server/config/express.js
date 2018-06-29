const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const handlebars = require('express-handlebars');
const helpers = require('handlebars-helpers')();

module.exports = (app) => {
  app.engine('hbs', handlebars({
    extname: '.hbs',
    defaultLayout: 'main'
  }));
  app.set('view engine', '.hbs');
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.user = req.user;
    }

    next();
  });

  app.use('/public', express.static('public'));

  console.log('Express ready!');
};
