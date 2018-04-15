HANDLERS.catalog = function (ctx) {
    getAllPosts()
        .then((posts) => {
            posts.map(post => post.time = calcTime(post._kmd.ect));
            posts.map(post => post.isAuthor = post.author === sessionStorage.getItem('username'));
            ctx.isAuth = auth.is();
            ctx.username = sessionStorage.getItem('username');
            ctx.posts = posts;
            let partials = getCommonPartials();
            partials.post = './templates/catalog/post.hbs';
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/catalog/catalog.hbs')
                });
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.details = function (ctx) {
    let id = ctx.params.id.substr(1);
    getPostAndComments(id)
        .then((result) => {
            [post, comments] = result;
            post.time = calcTime(post._kmd.ect);
            post.isAuthor = post.author === sessionStorage.getItem('username');
            comments.map(comment => comment.time = calcTime(comment._kmd.ect));
            comments.map(comment => comment.isAuthor = comment.author === sessionStorage.getItem('username'));
            ctx.isAuth = auth.is();
            ctx.username = sessionStorage.getItem('username');
            ctx.post = post;
            ctx.comments = comments;
            let partials = getCommonPartials();
            partials.comment = './templates/catalog/comment.hbs';
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/catalog/details.hbs');
                })
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.getEdit = function (ctx) {
    let id = ctx.params.id.substr(1);
    getPost(id)
        .then((post) => {
            ctx.post = post;
            ctx.isAuth = auth.is();
            ctx.username = sessionStorage.getItem('username');
            let partials = getCommonPartials();
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/catalog/edit.hbs');
                })
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.postEdit = function (ctx) {
    let id = ctx.params.id.substr(1);
    let title = ctx.params.title;
    let url = ctx.params.url;
    let imageUrl = ctx.params.image;
    let description = ctx.params.description;
    let author = sessionStorage.getItem('username');
    let data = {title, url, imageUrl, description, author};
    editPost(id, data)
        .then(() => {
            notifications.showInfo(`Post ${title} updated!`);
            ctx.redirect('#/catalog');
        })
};

HANDLERS.postDelete = function (ctx) {
    let id = ctx.params.id.substr(1);
    deletePostAndComments(id)
        .then(() => {
            notifications.showInfo('Post deleted!');
            ctx.redirect('#/catalog');
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.postComment = function (ctx) {
    let postId = ctx.params.id.substr(1);
    let content = ctx.params.content;
    let author = sessionStorage.getItem('username');
    let data = {postId, content, author};
    createComment(data)
        .then(() => {
            notifications.showInfo('comment created!');
            ctx.redirect(`#/post/comments/:${postId}`);
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.deleteComment = function (ctx) {
    let postId= ctx.params.postId.substr(1);
    let id = ctx.params.id.substr(1);
    deleteComment(id)
        .then(() => {
            notifications.showInfo('Comment deleted!');
            ctx.redirect(`#/post/comments/:${postId}`);
        })
        .catch(webApi.handleAjaxError);
};