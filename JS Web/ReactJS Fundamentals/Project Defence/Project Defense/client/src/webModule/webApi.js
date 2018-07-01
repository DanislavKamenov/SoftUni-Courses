import fetcher from './fetcher';
import AuthService from './authService';

export default {
    get: (endpoint, callback) => fetcher.send(endpoint, { method: 'GET' }, callback),
    post: (endpoint, body, callback) => {
        const headers = {'Accept': 'application/json', 'content-type': 'application/json'}
        if (AuthService.loggedIn())
            headers['Authorization'] = `Bearer ${AuthService.getToken}`;

        fetcher.send(
            endpoint,
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers
            },
            callback
        )
    }
}