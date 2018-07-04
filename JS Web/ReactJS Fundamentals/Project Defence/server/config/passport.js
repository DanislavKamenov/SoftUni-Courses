const passport = require('passport');
const LocalPassport = require('passport-local');
const User = require('mongoose').model('User');
    
passport.use(new LocalPassport((username, password, done) => {
    User.findOne({username}).then(user => {
        if (!user) return done('User does not exist!', false);
        if (!user.authenticate(password)) return done('Password does not match!', false);
        return done(null, user);
    });
}));

passport.serializeUser((user, done) => {
    if (user) return done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).populate('roles').then(user => {            
        if (!user) return done(null, false);
        user.roleNames = user.roles.map(r => r.name);
        user.isAdmin = user.roleNames.includes('Admin');
        return done(null, user);
    });
});
