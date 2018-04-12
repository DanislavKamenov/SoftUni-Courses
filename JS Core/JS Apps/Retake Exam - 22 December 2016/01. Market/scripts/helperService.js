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

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }


    function getCommonPartials() {
        return {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        };
    }

    function getCommonContext(ctx) {
        ctx.isAuth = auth.is();
        ctx.name = sessionStorage.getItem('name');
        return ctx;
    }

    return {
        signInUser,
        signOutUser,
        getCommonPartials,
        getCommonContext,
    }
})();