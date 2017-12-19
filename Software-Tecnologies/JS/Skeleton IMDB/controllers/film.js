const Film = require('../models/Film');

module.exports = {
	index: (req, res) => {
        Film.find({}).then(films => {
            res.render('film/index', {films: films});
        })
	},
	createGet: (req, res) => {
        res.render('film/create')
	},
	createPost: (req, res) => {
        let film = req.body;

        Film.create(film).then(film => {
            res.redirect("/");
        }).catch(err => {
            film.error = err.message;
            res.render('film/create', film);
        });
	},
	editGet: (req, res) => {
        let filmId = req.params.id;
        Film.findById(filmId).then(film => {
            if (film) {
                return res.render('film/edit', film);
            }
            else {
                return res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
	},
	editPost: (req, res) => {
        let filmId = req.params.id;
        let film = req.body;

        Film.findByIdAndUpdate(filmId, film, {runValidators: true}).then(film => {
            res.redirect('/')
        }).catch(err => res.redirect('/', err.message))
	},
	deleteGet: (req, res) => {
        let filmId = req.params.id;

        Film.findById(filmId).then(film => {
            if (film) {
                return res.render('film/delete', film);
            }
            else {
                return res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
	},
	deletePost: (req, res) => {
        let filmId = req.params.id;

        Film.findByIdAndRemove(filmId).then(film => {
            res.redirect('/');
        }).catch(err => {
                res.redirect('/', err.message)
            })
	}
};