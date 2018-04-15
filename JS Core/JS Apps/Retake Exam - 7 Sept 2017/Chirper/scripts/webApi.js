let webApi = (function () {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_ID = 'kid_SyF5rJe5f';
    const APP_SECRET = 'd6fbe5997a694848a60fe644c2cd7d2d';
    const BASE_64 = btoa(APP_ID + ':' + APP_SECRET);
    const authHeaders = {
        default: {Authorization: 'Basic ' + BASE_64,
            'Content-Type': 'application/json'},
        user: {Authorization: `Kinvey ${sessionStorage.getItem('authToken')}`}
    };
    const ACTIONS = {
        register: BASE_URL + 'user/' + APP_ID + '/',
        login: BASE_URL + 'user/' + APP_ID + '/login',
        logout: BASE_URL + 'user/' + APP_ID + '/_logout',
        accessCollection: BASE_URL + 'appdata/' + APP_ID + '/chirper'
    };
    
    function sendRequest(method, url, headers, data) {
        return $.ajax({
            method,
            url,
            headers,
            data
        });
    }

    function handleAjaxError(err) {
        let errorMsg = JSON.stringify(err);
        if (err.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (err.responseJSON && err.responseJSON.description)
            errorMsg = err.responseJSON.description;
        console.log(err);
        showError(errorMsg);
    }

    return {sendRequest, handleAjaxError, authHeaders, ACTIONS};
})();