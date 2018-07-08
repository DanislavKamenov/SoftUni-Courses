const Draft = require('../models/Draft');
const crud = require('../infrastructure/crud');
const Map = require('../models/Map');

const draftCrud = crud(Draft);

module.exports = {
    create: draft => 
        new Promise((resolve, reject) => {
            draftCrud
                .create(draft)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    getAll: (options, populate) => 
        new Promise((resolve, reject) => {
            draftCrud
                .getAll(options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    get: (query, options, populate) => 
        new Promise((resolve, reject) => {
            draftCrud
                .get(query, options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    getOne: (query, options, populate) => 
        new Promise((resolve, reject) => {
            draftCrud
                .getOne(query, options, populate)
                .then(resolve)
                .catch(err => reject(err.message));
        }),
    update: (query, updatedDraft, options) => 
        new Promise((resolve, reject) => {
            draftCrud
                .update(query, updatedDraft, options)
                .then(resolve)
                .catch(err => reject(err.message));
        })
};