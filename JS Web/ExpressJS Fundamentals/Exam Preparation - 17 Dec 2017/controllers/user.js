const router = require('express').Router();
const User = require('../models/User');
const Cart = require('../models/Cart');
const auth = require('../config/auth');

function loginGet(req, res) {
    res.render('user/login');
}

function loginPost(req, res) {
    let userToLog = req.body;

    User.findOne({email: userToLog.email})
        .then(user => {            
            if (!user || !user.authenticate(userToLog.password)) {
                req.flash('error', 'Invalid Credentials!');
                return res.redirect('/');
            }           
            req.login(user, err => {
                if (err) {
                    req.flash('error', 'Could not log in!');
                    return res.redirect('/');
                }               
                res.redirect('/flights');
            });
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could not log in!');
            return res.redirect('/');
        });
}

function logout(req, res) {
    req.logout();
    res.redirect('/');
}

function registerGet(req, res) {
    res.render('user/register', {});
}

function registerPost(req, res) {
    let userToRegister = req.body;

    if (!userToRegister.password || userToRegister.password !== userToRegister.repeatPassword) {
        req.flash('error', 'Passwords do not match!');
        return res.render('user/register', userToRegister);
    }

    User.validateAndRegister(userToRegister)
        .then((user) => {
            Cart.create({user: user._id})
                .then(cart => {
                    user.cart = cart._id;
                    user.save();
                    req.login(user, err => {
                        if (err) {
                            req.flash('error', 'Authentication Failed!');
                            return res.render('/user/register', userToRegister);
                        }               
                        res.redirect('/flights/'); //check valid route
                    });            
                }).catch(err => {
                    console.log(err);
                    req.flash('error', 'Could not create cart!');
                });
            
        }).catch(err => {           
            req.flash('error', err);
            res.render('user/register', userToRegister);
        });
}

function myTicketsGet(req, res) {
    Cart.findById(req.user.cart)
        .populate({ 
            path: 'tickets',
            populate: {
                path: 'flight',          
            } 
        })
        .then(cart => {
            let paidTickets = cart.tickets.filter(t => t.isPaid === true);
            res.render('user/my-tickets', {paidTickets});
        });   
}

router
    .get('/login', auth.isNotAuthenticated, loginGet)
    .post('/login', auth.isNotAuthenticated, loginPost)
    .get('/logout', auth.isAuthenticated, logout)
    .get('/register', auth.isNotAuthenticated, registerGet)
    .post('/register', auth.isNotAuthenticated, registerPost)
    .get('/myTickets', auth.isAuthenticated, myTicketsGet);

module.exports = router;