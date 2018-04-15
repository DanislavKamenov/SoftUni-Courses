HANDLERS.home = function (ctx) {
    ctx.isAuth = auth.is();
    let partials = getCommonPartials();
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/home/home.hbs');
        });
};

HANDLERS.login = function (ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;

    if (formDataIsValid(username, password)) {
        auth.loginUser(username, password)
            .then((user) => {
                signInUser(user, 'Login successful!');
                ctx.redirect('#/catalog');
            })
            .catch(webApi.handleAjaxError)
    }
};

HANDLERS.register = function (ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    let repeatPass = ctx.params.repeatPass;

    if (formDataIsValid(username, password, repeatPass)) {
        auth.registerUser(username, password)
            .then((user) => {
                signInUser(user, 'Registration successful!');
                ctx.redirect('#/catalog');
            })
            .catch(webApi.handleAjaxError);
    }
};

HANDLERS.logout = function (ctx) {
    auth.logOutUser()
        .then(() => {
            signOutUser('Logout Successful!');
            ctx.redirect('#/index.html');
        })
        .catch(webApi.handleAjaxError)
};