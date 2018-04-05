let auth = (function () {
    function registerUser() {
        let username = $('#formRegister').find('input[name=username]').val();
        let password = $('#formRegister').find('input[name=passwd]').val();

        webApi.sendRequest('POST',  webApi.ACTIONS.register,  webApi.authHeaders.default, {username, password})
            .then((res) => signInUser(res, 'Registration successful.'))
            .catch(webApi.handleAjaxError)
    }

    function loginUser() {
        let username = $('#formLogin').find('input[name=username]').val();
        let password = $('#formLogin').find('input[name=passwd]').val();

        webApi.sendRequest('POST',  webApi.ACTIONS.login,  webApi.authHeaders.default, {username, password})
            .then((res) => signInUser(res, 'LogIn successful.'))
            .catch(webApi.handleAjaxError);
    }

    function logOutUser() {
        webApi.sendRequest('POST',  webApi.ACTIONS.logout,  webApi.authHeaders.user)
            .then(() => signOutUser('logOut successful.'))
            .catch(webApi.handleAjaxError);
    }

    function signInUser(res, message) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authToken', res._kmd.authtoken);
        sessionStorage.setItem('userId', res._id);
        webApi.authHeaders.user = {Authorization: `Kinvey ${sessionStorage.getItem('authToken')}`};

        showMenuLinks();
        showHomeView();
        showInfo(message);
    }

    function signOutUser (message) {
        sessionStorage.clear();
        showMenuLinks();
        showHomeView();
        showInfo(message);
    }

    return {registerUser, loginUser, logOutUser};
})();