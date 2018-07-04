const jwt = require('jsonwebtoken');
const { secret } = require('./config').jwt;
const userService = require('../services/userService');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];

    // decode the token using a secret key-phrase
    return jwt.verify(token, secret, (err, decoded) => {
        // the 401 code is for unauthorized status
        if (err) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        const userId = decoded.sub;

        userService.getOne({ _id: userId }, null, 'roles')
            .then(user => {
                user.roleNames = user.roles.map(r => r.name);
                user.isAdmin = user.roleNames.includes('Admin');
                req.user = user;
                next();
            })
            .catch(err => {
                console.log(err);
                res.status(401).json({
                    success: false,
                    message: 'Unauthorized'
                });
            });
    });
};
