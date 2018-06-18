const router = require('express').Router();
const Article = require('../models/Article');

function index(req, res) {
    Article.find()
        .sort('-creationDate')
        .limit(3)
        .populate('edits')
        .then(articles => {
            if (articles.length > 0) {
                let latestArticle = articles[0];
                latestArticle.edits.map(e => e.content = e.content.split(' ').slice(0, 50).join(' '));
                articles.latestArticle = latestArticle;     
                res.render('home/index', {articles});   
                return;
            } 
            res.render('home/index');  
        });
     
}

function articleSearchPost(req, res) {
    let searchValue = req.body.searchValue;

    Article.find({ title: { $regex: searchValue, $options: 'i' } })
        .then(articles => {            
            articles.searchValue = searchValue || 'All';
            res.render('articles/search-results', {articles});
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Invalid search params!');
        });
}

router
    .get('/', index)
    .post('/', articleSearchPost);


module.exports = router;