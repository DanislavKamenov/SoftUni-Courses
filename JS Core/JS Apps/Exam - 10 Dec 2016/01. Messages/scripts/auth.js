let auth = (function () {

    function saveSession(user) {
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('name', user.name);
        sessionStorage.setItem('authToken', user._kmd.authtoken);
        sessionStorage.setItem('userId', user._id);
    }

    function registerUser(username, password, name) {
        let data = {username, password, name};
        return webApi.post('basic', data, 'user');
    }

    function loginUser(username, password) {
        let data = {username, password};
        return webApi.post('basic', data, 'user', 'login');
    }

    function logOutUser() {
        return webApi.post('user', {}, 'user', '_logout');
    }

    function is() {
        return !!sessionStorage.getItem('authToken');
    }

    return {saveSession, registerUser, loginUser, logOutUser, is};
})();