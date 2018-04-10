$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', (ctx) => {
            ctx.swap('<h1>Hello from Sammy.js</h1>');
        });

        this.get('#/about', (ctx) => {
            ctx.swap('<h1>About page</h1>');
        });

        this.get('#/contact', (ctx) => {
            ctx.swap('<h1>Contact Page</h1>');
        });

        this.get('#/login', (ctx) => {
            ctx.swap('<form action="#/login" method="post">\n' +
                'User: <input name="user" type="text">\n' +
                'Pass: <input name="pass" type="password">\n' +
                '<input type="submit" value="Login">\n' +
                '</form>')
        });

        this.post('#/login', (ctx) => {
            console.log(ctx.params.user);
            console.log(ctx.params.pass);

            ctx.redirect('#/contact');
        });

        this.get('#/hello/:name', (ctx) => {
            ctx.title = 'Hello!';
            ctx.name = ctx.params.name;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/greetings.hbs');
            });
        })
    });

    app.run();
});