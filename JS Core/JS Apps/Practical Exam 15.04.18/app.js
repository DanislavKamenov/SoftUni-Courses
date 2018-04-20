const HANDLERS = {};
$(() => {
    const APP = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        //Home page routes.
        this.get('index.html', HANDLERS.getHome);
        this.get('#/home/default', HANDLERS.getHome); //redirect route.
        this.post('#/login', HANDLERS.postLogin);
        this.post('#/register', HANDLERS.postRegister);
        this.get('#/logout', HANDLERS.logout);
        //Editor page routes.
        this.get('#/editor', HANDLERS.getEditor);
        this.post('#/add', HANDLERS.addEntry);
        this.get('#/remove/:id', HANDLERS.removeEntry);
        this.post('#/checkout', HANDLERS.checkout);
        //Overview page routes.
        this.get('#/overview', HANDLERS.getOverview);
        this.get('#/details/:id', HANDLERS.getDetails)
    });
    notify.attachNotificationEvents();
    APP.run();
});