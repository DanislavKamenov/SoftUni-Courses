const router = require('express').Router();
const Article = require('../models/Article');
const Edit = require('../models/Edit');
const auth = require('../config/auth');

function createGet(req, res) {
    res.render('articles/create');
}

function createPost(req, res) {
    let articleData = req.body;
    let creator = req.user;    

    Article.create({title: articleData.title})
        .then(article => {
            let newEdit = {
                author: creator.email,
                content: articleData.content,
                article: article._id,
            };

            Edit.create(newEdit)
                .then(edit => {
                    article.edits.push(edit._id);
                    article.save();
                    res.redirect('/');
                });
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Could not create article!');
            res.redirect('/articles/create');
        });
}

function allGet(req, res) {
    Article.find()        
        .then(articles => {
            if (articles.length > 0) {
                articles.sort((a, b) => a.title.localeCompare(b.title));
                res.render('articles/all', {articles});
                return;
            }
            res.render('articles/all');
        });
}

function singleArticleGet(req, res) {
    let articleId = req.params.id;

    Article.findById(articleId)
        .populate('edits')
        .then(article => {
            article.edits.map( e => e.contents = e.content.split(/\r\n|\r|\n/g).filter(c => c !== ''));
            res.render('articles/article', article);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Article does not exist!');
            res.redirect('/articles/all');
        });
}

function editGet(req, res) {
    let articleId = req.params.id;

    Article.findById(articleId)
        .populate('edits')
        .then(article => {
            if (article.isLocked && !req.user.isAdmin) {
                req.flash('error', 'Article can not be edited!');
                return res.redirect('/articles/all');
            }         
            res.render('articles/edit', article);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Article does not exist!');
            res.redirect('/articles/all');
        });
}

function editPost(req, res) {
    let articleId = req.params.id;
    let author = req.user;
    let editData = req.body;

    Article.findById(articleId)
        .then(article => {
            Edit.create({
                author: author.email,
                content: editData.content,
                article: article._id
            })
                .then(edit => {
                    article.edits.push(edit._id);
                    article.save();
                    res.redirect('/articles/all');
                });
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Article does not exist!');
            res.redirect(req.headers.referer);
        });
}

function latestGet(req, res) {
    Article.find()
        .sort('-creationDate')
        .populate('edits')
        .then(articles => {
            if (articles.length === 0) {
                req.flash('error', 'Article does not exist');
                res.redirect('/');
                return;
            }
            let article = articles[0];
            article.edits.map( e => e.contents = e.content.split(/\r\n|\r|\n/g).filter(c => c !== ''));
            res.render('articles/article', article);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Article does not exist');
            res.redirect('/');
        });
}

function historyGet(req, res) {
    let articleId = req.params.id;

    Article.findById(articleId)
        .sort('-creationDate')
        .populate('edits')
        .then(article => {
            article.edits.sort((a, b) => b.creationDate - a.creationDate);
            res.render('articles/history', article);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Article does not exist');
            res.redirect('/');
        });
}

function historyEditGet(req, res) {
    let editId = req.params.id;

    Edit.findById(editId)        
        .populate('article')
        .then(edit => {
            if (!edit) {
                req.flash('error', 'Edit does not exist!');
                res.redirect('/articles/all');
                return;
            }

            edit.contents = edit.content.split(/\r\n|\r|\n/g).filter(c => c !== '');
            let article = {
                _id: edit.article._id,
                title: edit.article.title,
                edits: [edit]
            };            
            res.render('articles/article', article);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Edit does not exist!');
            res.redirect('/articles/all');
        });
}

function lockUnlockArticle(req, res) {
    let articleId = req.params.id;

    Article.findById(articleId)
        .then(article => {
            if (!article) {
                req.flash('error', 'Article does not exist!');
                res.redirect(req.headers.referer);
                return;
            }

            if (article.isLocked) {
                article.isLocked = false;
            } else {
                article.isLocked = true;
            }

            article.save();
            res.redirect(req.headers.referer);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Article does not exist!');
            res.redirect('articles/all');
        });
}

router
    .get('/create', auth.isAuthenticated, createGet)
    .post('/create', auth.isAuthenticated, createPost)
    .get('/all', allGet)
    .get('/latest', latestGet)
    .get('/:id', singleArticleGet)
    .get('/edit/:id', auth.isAuthenticated , editGet)
    .post('/edit/:id', auth.isAuthenticated , editPost)
    .get('/history/:id', auth.isAuthenticated, historyGet)
    .get('/history/edit/:id', auth.isAuthenticated, historyEditGet)
    .get('/lock/:id',auth.isAllowedRole(['Admin']), lockUnlockArticle)
    .get('/unlock/:id',auth.isAllowedRole(['Admin']), lockUnlockArticle);


module.exports = router;