const generateWebToken = require('./generateWebToken');
const userService = require('../services/userService');
const encryption = require('../utils/encryption');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const user = {
        email: email.trim(),
        password: password.trim()
    };
    //TODO: Rework this validation.
    userService
        .getOne({email})
        .then(savedUser => {
            const isMatch = savedUser.password === encryption.generateHashedPassword(savedUser.salt, user.password);

            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';
          
                return done(error);
            }
            
            const token = generateWebToken(savedUser);
          
            return done(null, token);
        })
        .catch(err => {
            console.log(err);
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';
    
            return done(error);
        });    
});
