let helpers = (function () {
    function signInUser(user, message) {
        auth.saveSession(user);
        notify.showInfo(message);
    }

    function signOutUser (message) {
        sessionStorage.clear();
        notify.showInfo(message);
    }

    function formDataIsValid(username, password, repeatPass) {
        let err;
        if (username.length < 3) {
            err = 'Username must be at least 3 characters long!';
        } else if (!/^[A-Z-a-z]+$/.test(username)) {
            err = 'Username must contain only english alphabet characters!';
        } else if (password.length < 6) {
            err = 'Password must be at least 6 characters long!';
        } else if (!/^[A-Z-a-z0-9]+$/.test(password)) {
            err = 'Password must contain only english alphabet characters and digits!';
        } else if (repeatPass !== undefined) {
            if (password !== repeatPass) {
                err = 'Password fields must match!';
            }
        }

        if (err) {
            notify.showError(err);
        } else {
            return true;
        }
    }

    function postDataIsValid(url, title) {
        let err;
        if (url.length === 0) {
            err = 'URL required!'
        } else if (!url.startsWith('http')) {
            err = 'URL Must start with HTTP!';
        } else if (title.length === 0) {
            err = 'Title required!'
        }

        if (err) {
            notify.showError(err)
        } else {
            return true;
        }
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }



    function getCommonPartials() {
        return {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        };
    }

    function getCommonContext(ctx) {
        ctx.isAuth = auth.is();
        ctx.username = sessionStorage.getItem('username');
        return ctx;
    }

    return {
        signInUser,
        signOutUser,
        getCommonPartials,
        getCommonContext,
        formatDate,
        formatSender,
    }
})();