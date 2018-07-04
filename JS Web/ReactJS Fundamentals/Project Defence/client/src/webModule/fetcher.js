const BASE_URL = 'http://localhost:5000/';

export default {
    send: (endpoint, options) =>
        fetch(BASE_URL + endpoint, options)
            .then(data => data.json())

}