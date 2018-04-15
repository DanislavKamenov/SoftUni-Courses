HANDLERS.getHomeDefault = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/home/homeDefault.hbs');
        });
};

HANDLERS.getHomeUser = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/home/homeUser.hbs');
        });
};

HANDLERS.getLogin = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/forms/loginForm.hbs');
        });
};

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

HANDLERS.getRegister = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/forms/registerForm.hbs');
        });
};

HANDLERS.postRegister = (ctx) => {
    let username = ctx.params.username;
    let password = ctx.params.password;
    let name = ctx.params.name;

    auth.registerUser(username, password, name)
        .then((user) => {
            helpers.signInUser(user, 'Registration successful!');
            ctx.redirect('#/home/user');
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.logout = (ctx) => {
  auth.logOutUser()
      .then(() => {
          helpers.signOutUser('Logout successful!');
          ctx.redirect('#/home/default')
      })
};