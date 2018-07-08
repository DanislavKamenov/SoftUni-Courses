import fetcher from './fetcher';
import authService from './authService';

export default {
    get: (endpoint) => {
        const headers = { 'Accept': 'application/json', 'content-type': 'application/json' }
        if (authService.loggedIn()) headers['Authorization'] = `Bearer ${authService.getToken()}`;

        return new Promise((resolve, reject) => {
            fetcher.send(endpoint, { method: 'GET', headers })
                .then(res => {
                    if (res.success) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                })
                .catch(reject);
        });
    },
    post: (endpoint, data) => {
        const headers = { 'Accept': 'application/json', 'content-type': 'application/json' }
        if (authService.loggedIn()) headers['Authorization'] = `Bearer ${authService.getToken()}`;

        return new Promise((resolve, reject) => {
            fetcher.send(
                endpoint,
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers
                },
            )
                .then(res => {
                    if (res.success) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                })
                .catch(reject);
        });
    }
}