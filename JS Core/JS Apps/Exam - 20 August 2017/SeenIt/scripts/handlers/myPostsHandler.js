HANDLERS.myPosts = function (ctx) {
    let username = sessionStorage.getItem('username');
    getUserPosts(username)
        .then((userPosts) => {
            userPosts.map(post => post.time = calcTime(post._kmd.ect));
            userPosts.map(post => post.isAuthor = post.author === sessionStorage.getItem('username'));
            ctx.posts = userPosts;
            ctx.isAuth = auth.is();
            ctx.username = sessionStorage.getItem('username');
            let partials = getCommonPartials();
            partials.post = './templates/catalog/post.hbs';
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/myPosts/myPosts.hbs');
                })
        });
};
