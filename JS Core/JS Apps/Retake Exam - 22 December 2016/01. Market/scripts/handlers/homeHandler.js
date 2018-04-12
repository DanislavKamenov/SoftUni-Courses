//Get home view.
HANDLERS.getDefaultHome = function (ctx) {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/home/default-home.hbs');
        });
};

HANDLERS.getUserHome = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/home/user-home.hbs');
        })
};

//Get login View;
HANDLERS.getLogin = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/forms/login-form.hbs');
        })
};

//Send login request.
HANDLERS.postLogin = (ctx) => {
    let username = ctx.params.username;
    let password = ctx.params.password;
    auth.loginUser(username, password)
        .then((user) => {
            helpers.signInUser(user, 'Login successful!');
            ctx.redirect('#/home/user');
        })
        .catch(webApi.handleAjaxError);
};

//Get register view.
HANDLERS.getRegister = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/forms/register-form.hbs');
        });
};

//Send register request.
HANDLERS.postRegister = (ctx) => {
    let username = ctx.params.username;
    let password = ctx.params.password;
    let name = ctx.params.name;
    auth.registerUser(username, password, name)
        .then((user) => {
            helpers.signInUser(user, 'Login successful!');
            ctx.redirect('#/home/user');
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.logout = (ctx) => {
    auth.logOutUser()
        .then(() => {
            helpers.signOutUser('Logout successful!');
            ctx.redirect('#/home/anonymous');
        })
};