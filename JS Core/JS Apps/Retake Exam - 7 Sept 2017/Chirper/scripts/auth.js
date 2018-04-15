let auth = (function () {
    function registerUser() {
        let username = $('input[name=username]').val();
        let password = $('input[name=password]').val();
        let repeatPassword = $('input[name=repeatPass]').val();

        if (username.length < 5) {
            showError('Username must be at least 5 characters long!')
        } else if (password.length === 0 || repeatPassword.length === 0) {
            showError('Please fill out password fields!');
        } else if (password !== repeatPassword) {
            showError('Password fields don\'t match!');
        } else {
            let data = JSON.stringify({username, password, subscriptions: []});
            webApi.sendRequest('POST', webApi.ACTIONS.register, webApi.authHeaders.default, data)
                .then((res) => signInUser(res, 'Registration successful.'))
                .catch(webApi.handleAjaxError);
        }
    }

    function loginUser() {
        let username = $('input[name=username]').val();
        let password = $('input[name=password]').val();

        if (username.length < 5) {
            showError('Username must be at least 5 characters long!')
        } else if (password.length === 0) {
            showError('Please fill out password field!');
        } else {
            webApi.sendRequest('POST', webApi.ACTIONS.login, webApi.authHeaders.default, JSON.stringify({username, password}))
                .then((res) => signInUser(res, 'LogIn successful.'))
                .catch(webApi.handleAjaxError);
        }
    }

    function logOutUser() {
        webApi.sendRequest('POST', webApi.ACTIONS.logout, webApi.authHeaders.user)
            .then(() => signOutUser('logOut successful.'))
            .catch(webApi.handleAjaxError);
    }

    function signInUser(userInfo, message) {
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('subs', JSON.stringify(userInfo.subscriptions));
        webApi.authHeaders.user = {Authorization: `Kinvey ${sessionStorage.getItem('authToken')}`};

       loadNavigation();
       loadHomeFeed();
       showInfo(message);
    }

    function signOutUser (message) {
        sessionStorage.clear();
        $('.menu').remove();
        loadLoginForm();
        showInfo(message);
    }

    function is() {
        return !!sessionStorage.getItem('authToken');
    }

    return {registerUser, loginUser, logOutUser, is};
})();