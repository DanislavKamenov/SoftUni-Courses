const router = require('express').Router();
const User = require('../models/User');
const auth = require('../config/auth');

function loginGet(req, res) {
    res.render('user/login');
}

function loginPost(req, res) {
    let userToLog = req.body;

    User.findOne({username: userToLog.username})
        .then(user => {            
            if (!user || !user.authenticate(userToLog.password)) {
                req.flash('error', 'Invalid Credentials!');
                return res.redirect('/user/login');
            }           
            req.login(user, err => {
                if (err) {
                    req.flash('error', 'Could not log in!');
                    return res.redirect('/user/login');
                }                
                res.redirect('/');
            });
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could not log in!');
            return res.redirect('/user/login');
        });
}

function logout(req, res) {
    req.logout();
    res.redirect('/');
}

function registerGet(req, res) {
    res.render('user/register');
}

function registerPost(req, res) {
    let userToRegister = req.body;

    if (!userToRegister.password || userToRegister.password !== userToRegister.repeatPassword) {
        req.flash('error', 'Passwords do not match!');
        return res.render('user/register', userToRegister);
    }

    User.validateAndRegister(userToRegister)
        .then((user) => {
            req.login(user, err => {
                if (err) {
                    req.flash('error', 'Authentication Failed!');
                    return res.render('user/login', userToRegister);
                }               
                res.redirect('/');
            });            
        }).catch(err => {           
            req.flash('error', err);
            res.render('user/register', userToRegister);
        });
}

router
    .get('/login', auth.isNotAuthenticated, loginGet)
    .post('/login', auth.isNotAuthenticated, loginPost)
    .get('/logout', auth.isAuthenticated, logout)
    .get('/register', auth.isNotAuthenticated, registerGet)
    .post('/register', auth.isNotAuthenticated, registerPost);    

module.exports = router;