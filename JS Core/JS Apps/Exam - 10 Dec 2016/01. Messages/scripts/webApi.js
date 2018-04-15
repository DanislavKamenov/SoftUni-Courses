let webApi = (function () {
        const BASE_URL = 'https://baas.kinvey.com/';
        const APP_ID = 'kid_SyF5rJe5f';
        const APP_SECRET = 'd6fbe5997a694848a60fe644c2cd7d2d';
        const BASE_64 = btoa(APP_ID + ':' + APP_SECRET);
        const authHeaders = {
            basic: () => {
                return {
                    Authorization: 'Basic ' + BASE_64,
                    'Content-Type': 'application/json',
                }
            },
            user: () => {
                return {
                    Authorization: `Kinvey ${sessionStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json',
                };
            }
        };

        //Create AJAX request object.
        function makeRequest(method, module, endpoint, header) {
            return {
                method,
                url: BASE_URL + module + '/' + APP_ID + '/' + endpoint,
                headers: authHeaders[header](),
            };
        }

        // Function to return GET promise
        function get(headerType, module, endpoint) {
            if (!endpoint) endpoint = '';
            return $.ajax(makeRequest('GET', module, endpoint, headerType));
        }

        // Function to return POST promise
        function post(headerType, data, module, endpoint) {
            if (!endpoint) endpoint = '';
            let req = makeRequest('POST', module, endpoint, headerType);
            req.data = JSON.stringify(data);
            return $.ajax(req);
        }

        // Function to return PUT promise
        function update(headerType, data, module, endpoint) {
            if (!endpoint) endpoint = '';
            let req = makeRequest('PUT', module, endpoint, headerType);
            req.data = JSON.stringify(data);
            return $.ajax(req);
        }

        // Function to return DELETE promise
        function remove(headerType, module, endpoint, id) {
            if (!endpoint) endpoint = '';
            else
                endpoint = endpoint + '/' + id;
            return $.ajax(makeRequest('DELETE', module, endpoint, headerType));
        }

        function handleAjaxError(reason) {
            notify.showError(reason.responseJSON.description);
        }

        return {
            get,
            post,
            update,
            remove,
            handleAjaxError,
        };
    }
)();