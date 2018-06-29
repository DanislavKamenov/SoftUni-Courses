const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const auth = require('../config/auth');

function loginGet(req, res) {
    res.render('user/login', {error: req.query.error});
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
        userToRegister.error = handleLoginError('Passwords do not match!');
        return res.render('user/register', userToRegister);
    }

    User.validateForRegister(userToRegister)
        .then((user) => {
            req.login(user, err => {
                if (err) {
                    userToRegister.error = handleLoginError();
                    return res.render('/user/login', userToRegister);
                }               
                res.redirect('/');
            });            
        }).catch(err => {           
            userToRegister.error = handleLoginError(err);
            res.render('user/register', userToRegister);
        });
}

function getUser(req, res) {
    let user = req.user;
    User
        .findById(user._id)
        .populate('carsRented')
        .then(user => {
            res.render('user/profile', user);
        })
        .catch(err => {
            console.log(err);
        });  
}

function handleLoginError(err) {
    return  err || 'Authentication Failed!';
}

router
    .get('/login', loginGet)
    .post('/login', passport.authenticate('local', {
        successRedirect: '/?success=Login Successful!',
        failureRedirect: '/user/login?error=Invalid Credentials!',        
    }))
    .get('/logout', logout)
    .get('/register', registerGet)
    .post('/register', registerPost)
    .get('/profile', auth.isAuthenticated, getUser);

module.exports = router;