const HANDLERS = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        //Home routes.
        this.get('#/index.html', HANDLERS.home);
        this.get('index.html', HANDLERS.home);
        this.post('#/login', HANDLERS.login);
        this.post('#/register', HANDLERS.register);
        this.get('#/logout', HANDLERS.logout);
        //Catalog routes.
        this.get('#/catalog', HANDLERS.catalog);
        this.get('#/post/comments/:id', HANDLERS.details);
        this.get('#/post/edit/:id', HANDLERS.getEdit);
        this.post('#/post/edit/:id', HANDLERS.postEdit);
        this.get('#/post/delete/:id', HANDLERS.postDelete);
        //Comment routes.
        this.post('#/post/comments/:id', HANDLERS.postComment);
        this.get('#/post/:postId/comments/delete/:id', HANDLERS.deleteComment);
        //Submit routes.
        this.get('#/submit', HANDLERS.getSubmit);
        this.post('#/submit', HANDLERS.postSubmit);
        //MyPost routes.
        this.get('#/my/posts', HANDLERS.myPosts);
    });
    notifications.attachNotificationEvents();
    app.run();
});