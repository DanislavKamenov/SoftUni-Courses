const User = require('../models/User');
const crud = require('../infrastructure/crud');

const userCrud = crud(User);

module.exports = {
    create: (newUser) => 
        new Promise((resolve, reject) => {
            userCrud
                .create(newUser)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    getAll: (options, populate) => 
        new Promise((resolve, reject) => {
            userCrud
                .getAll(options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    get: (query, options, populate) => 
        new Promise((resolve, reject) => {
            userCrud
                .get(query, options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    getOne: (query, options, populate) => 
        new Promise((resolve, reject) => {
            userCrud
                .getOne(query, options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    update: (query, updatedEntity, options) => 
        new Promise((resolve, reject) => {
            userCrud
                .update(query, updatedEntity, options)
                .then(resolve)
                .catch(err => reject(err));
        })
};