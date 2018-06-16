const router = require('express').Router();
const Cart = require('../models/Cart');
const Ticket = require('../models/Ticket');

function addPost(req, res) {
    let flightId = req.params.id;
    let seatInfo = req.body;

    Cart.findOne({user: req.user._id})
        .populate('tickets')
        .then(cart => {
            let ticketForFlight = cart.tickets.filter(t => t.flight.toString() === flightId && t.isPaid === false);
            if (ticketForFlight.length === 0) {
                let ticketToAdd = {
                    flight: flightId,
                    seatsInfo: [{type: seatInfo.type, price: seatInfo.price, ammount: seatInfo.ammount}],                    
                };

                Ticket.create(ticketToAdd)
                    .then(ticket => {                        
                        cart.tickets.push(ticket);
                        cart.save();  
                        req.flash('success', 'Seats added to ticket!');  
                        res.redirect('/cart/get');                        
                    }).catch(err => {
                        console.log(err);
                        req.flash('error', 'Could not create ticket!');
                        res.redirect(req.headers.referer);
                    }); 
            } else {
                Ticket.findById(ticketForFlight[0]._id)
                    .then(ticket => { 
                        ticket.seatsInfo.push({type: seatInfo.type, price: seatInfo.price, ammount: seatInfo.ammount});
                        ticket.save();
                        req.flash('success', 'Seats added to ticket!');
                        res.redirect('/cart/get');
                    }).catch(err => {
                        console.log(err);
                        req.flash('error', 'Could not find ticket!');
                        res.redirect(req.headers.referer);
                    });  
            }                
        });
}

function checkoutGet(req, res) {
    Cart.findById(req.user.cart)
        .populate({ 
            path: 'tickets',
            populate: {
                path: 'flight',          
            } 
        })
        .then(cart => {
            cart.tickets = cart.tickets.filter(t => t.isPaid === false);
            res.render('cart/cart', {cart});
        }).catch(err => {
            console.log(err);
            req.flash('error', 'Could not find cart');
        });
}

function checkOutPost(req, res) {
    let ticketId = req.params.id;

    Ticket.update({_id: ticketId}, {isPaid: true})
        .then(() => {
            req.flash('success', 'Ticket booked!');
            res.redirect(req.headers.referer);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Invalid ticket!');
            res.redirect(req.headers.referer);
        });
}

function removeGet(req, res) {
    let ticketId = req.params.id;

    Ticket.remove({_id: ticketId})
        .then(() => {
            req.flash('success', 'Ticket removed!');
            res.redirect(req.headers.referer);
        })
        .catch(err => {
            console.log(err);
            req.flash('error', 'Invalid ticket!');
            res.redirect(req.headers.referer);
        });
}
    

router
    .post('/addFlight/:id', addPost)
    .get('/get', checkoutGet)
    .get('/checkout/:id', checkOutPost)
    .get('/remove/:id', removeGet);

module.exports = router;