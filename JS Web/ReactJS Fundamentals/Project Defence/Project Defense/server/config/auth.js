
module.exports = {
    isAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            req.flash('error', 'Log In First!');
            res.redirect('/user/login');
        }
    },
    isNotAuthenticated: (req, res, next) => {
        if (!req.isAuthenticated()) {
            next();
        } else {
            req.flash('error', 'Already Logged In!');
            res.redirect('/'); // Set this route to default logged view.
        }
    },
    isAllowedRole: (roleArr) => {
        return (req, res, next) => {
            if (req.user) {
                for (let role of req.user.roleNames) {
                    if (roleArr.includes(role)) {
                        return next();
                    }
                }            
            }
            req.flash('error', 'Forbidden');
            res.redirect('/user/login'); 
        };
    }
};