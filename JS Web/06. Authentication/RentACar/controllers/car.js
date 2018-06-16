const PriceClass = require('../models/PriceClass');
const Car = require('../models/Car');
const router = require('express').Router();
const auth = require('../config/auth');

function addGet(req, res) {
    PriceClass.find().then(pClasses => {
        res.render('cars/add', {pClasses});
    });
}

function addPost(req, res) {
    let carToAdd = req.body;
    Car
        .create(carToAdd)
        .then((car) => {
            PriceClass
                .update({_id: car.priceClass}, {$push: {cars: car._id}})
                .then(() => {
                    res.redirect('/cars/all/?success=Car Created Successfully!');
                });            
        })
        .catch(err => {
            PriceClass.find().then(pClasses => {
                carToAdd.pClasses = pClasses;
                carToAdd.error = err;
                res.render('cars/add',  carToAdd);
            });
        });
}

function viewAll(req, res) {
    Car.find({isRented: false})
        .then(cars => {
            res.render('cars/viewAll', {
                cars,               
                error: req.query.error,
                success: req.query.success,
                             
            });
        })
        .catch(err => {
            console.log(err);
        });
}

function editGet(req, res) {
    let carId = req.params.id;

    PriceClass
        .find()
        .then(pClasses => {
            Car
                .findById(carId)
                .then(car => {
                    car.pClasses = pClasses;
                    car.error = req.query.error;
                    res.render('cars/edit', car);
                })
                .catch(err => {
                    console.log(err);
                    res.render('cars/edit', {error: 'Car not found!'});
                });
        });
}

function editPost(req, res) {
    let carId = req.params.id;
    let carToEdit = req.body;
    
    Car
        .update({_id: carId}, carToEdit)
        .then(() => {
            res.redirect('/cars/all/?success=Car Edited Successfully!');
        })
        .catch(() => {
            res.redirect(req.headers.referer + '?error=Edit failed!');
        });
}

function rentGet(req, res) {
    let carId = req.params.id;

    PriceClass
        .find()
        .then(pClasses => {
            Car
                .findById(carId)
                .populate('priceClass')
                .then(car => {
                    car.pClasses = pClasses;
                    car.error = req.query.error;
                    res.render('cars/rent', car);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/cars/all?error=Car not found!');
                });
        });
}

function rentPost(req, res) {
    let carId = req.params.id;
    let daysToRent = +req.body.daysToRent;
    let user = req.user;
    
    if (daysToRent === 0) return res.redirect(req.headers.referer + '?error=Please enter valid number of days!'); 

    Car
        .update({_id: carId}, {isRented: true, rentedBy: user._id, rentDuration: daysToRent})
        .then(() => {
            user.carsRented.push(carId);
            user.save();                
            res.redirect('/cars/all?success=Car rented successfully!');
        })
        .catch(err => {
            console.log(err);
            res.redirect(req.headers.referer + '?error=Car could not be rented!');
        });
}

router
    .get('/add', auth.isAllowedRole(['Admin']), addGet)
    .post('/add', auth.isAllowedRole(['Admin']), addPost)
    .get('/all', viewAll)
    .get('/edit/:id', auth.isAllowedRole(['Admin']), editGet)
    .post('/edit/:id', auth.isAllowedRole(['Admin']), editPost)
    .get('/rent/:id', auth.isAllowedRole(['User', 'Admin']), rentGet)
    .post('/rent/:id', auth.isAllowedRole(['User', 'Admin']), rentPost);

module.exports = router;