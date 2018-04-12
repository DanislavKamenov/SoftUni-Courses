const HANDLERS = {};

$(() => {
    const APP = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        //Home page routes.
        this.get('market.html', HANDLERS.getDefaultHome);
        this.get('#/home/anonymous', HANDLERS.getDefaultHome); //URL for redirecting to home.
        this.get('#/home/user', HANDLERS.getUserHome);
        this.get('#/login', HANDLERS.getLogin);
        this.post('#/login', HANDLERS.postLogin);
        this.get('#/register', HANDLERS.getRegister);
        this.post('#/register', HANDLERS.postRegister);
        this.get('#/logout', HANDLERS.logout);
        //Shop page routes.
        this.get('#/shop', HANDLERS.getShop);
        this.post('#/purchase/:id', HANDLERS.postShop);
        //Cart page routes.
        this.get('#/cart', HANDLERS.getCart);
        this.post( '#/discard/:id', HANDLERS.discard);
    });
    notify.attachNotificationEvents();
    APP.run();
});