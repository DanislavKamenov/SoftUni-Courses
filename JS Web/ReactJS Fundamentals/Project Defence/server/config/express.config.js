const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const localSignupStrategy = require('../passport/local-signup');
const localLoginStrategy = require('../passport/local-login');
const cors = require('cors');

module.exports = (app, config) => {    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());       
    app.use(passport.initialize());
    app.use(passport.session());   
    app.use(cors());

    passport.use('local-signup', localSignupStrategy);
    passport.use('local-login', localLoginStrategy);    

    app.use('/static', express.static(
        path.join(config.rootPath, './static')
    ));
};