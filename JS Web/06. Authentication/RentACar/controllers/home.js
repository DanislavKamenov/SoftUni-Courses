const router = require('express').Router();

function index(req, res) {    
    res.render('home/home', {
        error: req.query.error,
        success: req.query.success
    });    
}

router
    .get('/', index);


module.exports = router;