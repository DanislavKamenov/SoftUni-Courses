module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/users/login');
    }
  },
  hasAllowedRole: (roleArr) => {
    return (req, res, next) => {
      if (req.user) {
        for (let role of req.user.roleNames) {
          if (roleArr.includes(role)) {
            return next();
          }
        }            
      } 
      res.redirect('/users/login'); 
    };
  }
};
