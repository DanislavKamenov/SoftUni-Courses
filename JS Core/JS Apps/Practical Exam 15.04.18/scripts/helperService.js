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
        if (username.length < 5) {
            err = 'Username must be at least 5 characters long!';
        } else if (password.length === 0) {
            err = 'Password must not be empty!';
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

    function entryIsValid(name, qty, price) {
        let err;
        if (name.length === 0) {
            err = 'Name must be non-empty string!'
        }  else if (isNaN(Number(qty)) || qty === true || qty === null || qty === 0) {
            err = 'Quantity must be a number!';
            if (qty === 0) {
                err = 'Quantity must be a number greater than zero!';
            }
        } else if (isNaN(Number(price)) || price === true || price === null || price === 0) {
            err = 'Price must be a number!';
            if (price === 0) {
                err = 'Price must be a number greater than zero!';
            }
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
        return date.getDate() + '-' + padZeros(date.getMonth() + 1) +
            "-" + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
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
        ctx.username = sessionStorage.getItem('username');
        return ctx;
    }

    return {
        signInUser,
        signOutUser,
        getCommonPartials,
        getCommonContext,
        formatDate,
        formDataIsValid,
        entryIsValid,
    }
})();