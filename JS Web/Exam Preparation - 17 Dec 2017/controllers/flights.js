const router = require('express').Router();
const Flight = require('../models/Flight');
const auth = require('../config/auth');

function catalogGet(req, res) {
    Flight.find()
        .then(flights => {
            if (!req.user || !req.user.isAdmin) {
                flights = flights.filter(f => f.public === true);
            }
            res.render('flights/catalog', {flights});
        }).catch(err => {
            console.log(err);
            res.flash('error', 'Flight search failed!');
            res.render('flights/catalog');
        });    
}

function addFlightGet(req, res) {
    res.render('flights/add');
}

function addFlightPost(req, res) {
    let flightToAdd = req.body;    

    Flight
        .create(flightToAdd)
        .then(flight => {
            req.flash('success', 'Flight created!');
            res.redirect('/flights/');
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could not create flight!');
            res.render('flights/add', flightToAdd);
        });
}

function detailsGet(req, res) {
    let flightId = req.params.id;

    Flight.findById(flightId)
        .populate('seats')
        .then(flight => {
            if (flight.public === false && !req.user.isAdmin) {
                req.flash('error', 'Forbidden');
                return res.redirect('/flights/');
            }            
            res.render('flights/details', {flight});
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Flight not found!');
        });
}

function publishGet(req, res) {
    let flightId = req.params.id;

    Flight.findById(flightId)
        .then(flight => {
            if (!flight) {
                req.flash('error', 'Could not find flight!');
                return res.redirect(req.headers.referer);
            }

            flight.public = true;
            flight.save();
            res.redirect(req.headers.referer);
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could notfind flight!');
        });
}

function editGet(req, res) {
    let flightId = req.params.id;

    Flight.findById(flightId)
        .then(flight => {
            res.render('flights/edit', flight);
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Flight not found!');
            res.redirect(req.headers.referer);
        });
}

function editPost(req, res) {
    let flightId = req.params.id;
    let flightToUpdate = req.body;

    Flight.update({_id: flightId}, flightToUpdate, {runValidators: true})
        .then(() => {
            req.flash('success', 'Flight updated!');
            res.redirect('/flights/');
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could not find flight!');
            res.redirect(req.headers.referer);
        });
}

router
    .get('/', catalogGet)
    .get('/add',auth.isAllowedRole(['Admin']), addFlightGet)
    .post('/add',auth.isAllowedRole(['Admin']), addFlightPost)
    .get('/details/:id',auth.isAuthenticated, detailsGet)
    .get('/publish/:id', auth.isAllowedRole(['Admin']), publishGet)
    .get('/edit/:id', auth.isAllowedRole(['Admin']), editGet)
    .post('/edit/:id', auth.isAllowedRole(['Admin']), editPost);   

module.exports = router;