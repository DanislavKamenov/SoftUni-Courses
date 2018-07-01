const BASE_URL = 'http://localhost:5000';

export default {
    send: (endpoint, options, callback) => {              
        fetch(BASE_URL + endpoint, options)
            .then(data => data.json())
            .then(callback)
            .catch(console.log)
    }
}