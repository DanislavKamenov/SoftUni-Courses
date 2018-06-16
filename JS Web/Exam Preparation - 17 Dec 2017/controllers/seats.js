const router = require('express').Router();
const Seat = require('../models/Seat');
const Flight = require('../models/Flight');

function seatsPost(req, res) {
    let seatToAdd = req.body;

    Seat.create(seatToAdd)
        .then(seat => {
            Flight.findById(seat.flight)
                .then(flight => {
                    if (!flight) {
                        req.flash('error', 'Flight not found!');
                        return res.redirect(req.headers.referer);
                    }
                    flight.seats.push(seat._id);
                    flight.save();
                    res.redirect(req.headers.referer);
                }).catch(err => {
                    console.log(err);
                    req.flash('error', 'Flight not found!');
                    return res.redirect(req.headers.referer);
                });            
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could not create seat!');
        });
}

function deleteGet(req, res) {
    let seatId = req.params.id;

    Seat.remove({_id: seatId})
        .then(() => {
            res.redirect(req.headers.referer);
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could not delete seat!');
            res.redirect(req.headers.referer);
        });
}

router 
    .post('/create', seatsPost)
    .get('/delete/:id', deleteGet);

module.exports = router;