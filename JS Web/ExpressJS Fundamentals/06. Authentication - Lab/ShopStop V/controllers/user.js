const User = require('../models/User');
const encryption = require('../utils/encryption');

module.exports.registerGet = (req, res) => {
    res.render('user/register');
};

module.exports.registerPost = (req, res) => {
    let user = req.body;

    if (user.password && user.password !== user.confirmedPassword) {
        user.error = 'Passwords do not match!';
        return res.render('user/register', user);    
    }

    let salt = encryption.generateSalt();
    user.salt = salt;

    if (user.password) {
        let hashedPassword = encryption.generateHashedPassword(salt, user.password);
        user.password = hashedPassword;
    }

    User.create(user)
        .then(user => {
            req.logIn(user, err => {
                if (err) {
                    return res.render('user/register', {error: 'Authentication failed!'});
                }

                res.redirect('/');
            });
        })
        .catch(err => {
            user.error = err;
            res.render('user/register', user);
        });
};

module.exports.loginGet = (req, res) => {
    res.render('user/login');
};

module.exports.loginPost = (req, res) => {
    let userToLogin = req.body;

    User.findOne({ username: userToLogin.username }).then(user => {
        if (!user || !user.authenticate(userToLogin.password)) {
            res.render('user/login', {error: 'Invalid credentials!'});
        } else {
            req.logIn(user, err => {
                if (err) {
                    return res.render('user/login', {error: 'Authentication failed!'});
                }

                res.redirect('/');
            });
        }
    });
};

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};