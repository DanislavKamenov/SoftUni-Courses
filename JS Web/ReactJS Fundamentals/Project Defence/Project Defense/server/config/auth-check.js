const jwt = require('jsonwebtoken');
const { secret }  = require('./config');
const userService = require('../services/userService');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];

    // decode the token using a secret key-phrase
    return jwt.verify(token, secret, (err, decoded) => {
    // the 401 code is for unauthorized status
        if (err) { return res.status(401).end(); }

        const userId = decoded.sub;

        userService.getOne({_id: userId})
            .then(user => {
                req.user = user;
                return next();
            })
            .catch(err => {
                console.log(err);
                res.status(401).end();
            });       
    });
};
