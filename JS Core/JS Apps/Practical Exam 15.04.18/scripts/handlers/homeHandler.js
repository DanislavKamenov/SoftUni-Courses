HANDLERS.getHome = (ctx) => {
    let partials = helpers.getCommonPartials();
    ctx = helpers.getCommonContext(ctx);
    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/home/welcome.hbs');
        });
};

HANDLERS.postLogin = (ctx) => {
   let username = ctx.params['username-login'];
   let password = ctx.params['password-login'];

   if (helpers.formDataIsValid(username, password)) {
       auth.loginUser(username, password)
           .then((user) => {
               helpers.signInUser(user, 'Login successful!');
               ctx.redirect('#/editor');
           })
           .catch(webApi.handleAjaxError);
   }
};

HANDLERS.postRegister = (ctx) => {
    let username = ctx.params['username-register'];
    let password = ctx.params['password-register'];
    let repeatPassword = ctx.params['password-register-check'];

    if (helpers.formDataIsValid(username, password, repeatPassword)) {
        auth.registerUser(username, password)
            .then((user) => {
                helpers.signInUser(user, 'Registration successful!');
                ctx.redirect('#/editor');
            })
            .catch(webApi.handleAjaxError);
    }
};

HANDLERS.logout = (ctx) => {
  auth.logOutUser()
      .then(() => {
          helpers.signOutUser('Logout successful!');
          ctx.redirect('#/home/default')
      })
};