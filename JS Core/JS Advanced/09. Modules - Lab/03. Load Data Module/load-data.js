let data = require('./data');

function sort(prop) {
    return data.sort((a, b) => a[prop].localeCompare(b[prop]));
}

function filter(prop, val) {
    return data.filter(x => x[prop] === val);
}

module.exports = {sort, filter};