const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const helpers = require('handlebars-helpers')();

module.exports = (app, config) => {
    handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

    app.engine('hbs', expressHandlebars({
        extname: '.hbs',
        defaultLayout: 'main',        
    }));
    app.set('view engine', '.hbs');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(session({
        secret: 'SUp3rB1gS3cR37',        
        saveUninitialized: false,
        resave: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());   

    app.use((req, res, next) => {
        if (req.user) {            
            res.locals.user = req.user;
        } else {
            res.locals.user = false; //Setting user to false if no user exists
        }                            //helps avoid critical errors when using PUG and checking if user exists!
        next();
    });

    app.use('/static', express.static(
        path.join(config.rootPath, './static')
    ));
};