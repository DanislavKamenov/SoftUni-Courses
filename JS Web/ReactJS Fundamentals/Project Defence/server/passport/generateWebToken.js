const jwt = require('jsonwebtoken');
const { secret, duration }  = require('../config/config').jwt;

module.exports = (savedUser, data) => {
    const payload = {
        sub: savedUser.id,
        user: savedUser                
    };            
  
    // create a token string
    return jwt.sign(payload, secret, {expiresIn: duration});            
};