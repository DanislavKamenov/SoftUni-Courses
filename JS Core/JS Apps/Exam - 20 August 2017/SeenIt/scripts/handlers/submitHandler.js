HANDLERS.getSubmit = function (ctx) {
    ctx.isAuth = auth.is();
    ctx.username = sessionStorage.getItem('username');
    let partials = getCommonPartials();
    ctx.loadPartials(partials)
        .then(function () {
           this.partial('./templates/submit/submit.hbs');
        });
};

HANDLERS.postSubmit = function (ctx) {
    let title = ctx.params.title;
    let url = ctx.params.url;
    let imageUrl = ctx.params.image;
    let description = ctx.params.comment;
    let author = sessionStorage.getItem('username');
    if (postDataIsValid(url, title)) {
        let data = {title, url, imageUrl, description, author};
        createPost(data)
            .then(() => {
                notifications.showInfo('Post created!');
                ctx.redirect('#/catalog');
            });
    }
};