const PassportLocalStrategy = require('passport-local').Strategy;
const userService = require('../services/userService');
const roleService = require('../services/roleService');
const generateWebToken = require('./generateWebToken');

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',    
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const user = {
        email: email.trim(),
        password: password.trim(),        
        name: req.body.name.trim(),
    };
    //TODO: rework this validation.
    userService
        .getOne({email})
        .then(() => {
            return done('E-mail already exists!');
        })
        .catch(err => {            
            if (err === 'User does not exist!') {
                roleService
                    .getOne({name: 'User'})
                    .then(role => {                        
                        user.roles = [role._id],
                        userService
                            .create(user)
                            .then((savedUser) => {
                                let token = generateWebToken(savedUser);
                                done(null, token);
                            })
                            .catch(err => done(err));
                    });
            } else {
                return done(err);
            }         
        });    
});
