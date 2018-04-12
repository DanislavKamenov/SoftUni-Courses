let helpers = (function () {
    function signInUser(user, message) {
        auth.saveSession(user);
        notify.showInfo(message);
    }

    function signOutUser (message) {
        sessionStorage.clear();
        notify.showInfo(message);
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