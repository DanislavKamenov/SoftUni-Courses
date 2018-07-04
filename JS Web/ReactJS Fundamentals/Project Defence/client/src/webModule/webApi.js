import fetcher from './fetcher';
import authService from './authService';

export default {
    get: (endpoint, callback) => fetcher.send(endpoint, { method: 'GET' }, callback),
    post: (endpoint, data) => {
        const headers = {'Accept': 'application/json', 'content-type': 'application/json'}
        if (authService.loggedIn())
            headers['Authorization'] = `Bearer ${authService.getToken()}`;
             
        return fetcher.send(
            endpoint,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers
            },            
        )
    }
}