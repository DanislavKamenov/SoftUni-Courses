const Map = require('../models/Map');
const crud = require('../infrastructure/crud');

const mapCrud = crud(Map);

module.exports = {
    create: map => 
        new Promise((resolve, reject) => {
            mapCrud
                .create(map)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    getAll: (options, populate) => 
        new Promise((resolve, reject) => {
            mapCrud
                .getAll(options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    get: (query, options, populate) => 
        new Promise((resolve, reject) => {
            mapCrud
                .get(query, options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    getOne: (query, options, populate) => 
        new Promise((resolve, reject) => {
            mapCrud
                .getOne(query, options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    update: (query, updatedMap, options) => 
        new Promise((resolve, reject) => {
            mapCrud
                .update(query, updatedMap, options)
                .then(resolve)
                .catch(err => reject(err.message));
        })
};