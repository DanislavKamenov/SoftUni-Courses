const router = require('express').Router();

function index(req, res) {
    res.render('home/index');    
}

router
    .get('/', index);


module.exports = router;