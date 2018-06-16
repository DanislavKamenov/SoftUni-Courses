const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (app, config) => {
    //Public folder.
    app.use('/content', express.static(
        path.join(config.rootPath, './content'))
    );

    //Middleware for parsing form data.
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(cookieParser());
    app.use(session({
        secret: 'omae wa mou shindeiru', 
        cookie : {
            maxAge: 1000 * 60 * 60 *24 * 365
        },
        saveUninitialized: false, 
        resave: false}));
    
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
        if (req.user) {
            res.locals.user = req.user;
        }
        next();
    });

    app.set('view engine', 'pug');
    app.set('views', path.join(config.rootPath, 'views'));
};
