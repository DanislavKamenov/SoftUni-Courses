const HANDLERS = {};
$(() => {
    const APP = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        //Home page routes.
        this.get('messages.html', HANDLERS.getHomeDefault);
        this.get('#/home/default', HANDLERS.getHomeDefault); //redirect route.
        this.get('#/home/user', HANDLERS.getHomeUser);
        this.get('#/login', HANDLERS.getLogin);
        this.post('#/login', HANDLERS.postLogin);
        this.get('#/register', HANDLERS.getRegister);
        this.post('#/register', HANDLERS.postRegister);
        this.get('#/logout', HANDLERS.logout);
        //My msg page routes.
        this.get('#/send', HANDLERS.getSend);
        this.post('#/send', HANDLERS.postSend);
        this.get('#/my', HANDLERS.getMessages);
        //Archive page routes.
        this.get('#/archive', HANDLERS.getArchive);
        this.post('#/delete/:id', HANDLERS.delete);
    });
    notify.attachNotificationEvents();
    APP.run();
});