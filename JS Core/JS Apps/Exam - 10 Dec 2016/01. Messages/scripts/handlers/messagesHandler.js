HANDLERS.getSend = (ctx) => {
   crud.getAllUsers()
       .then((users) => {
           users.map(user => user.target = helpers.formatSender(user.name, user.username));
           let partials = helpers.getCommonPartials();
           partials.user = './templates/send/user.hbs';
           ctx = helpers.getCommonContext(ctx);
           ctx.users = users;
           ctx.loadPartials(partials)
               .then(function () {
                   this.partial('./templates/send/sendMessage.hbs');
               });
       })
       .catch(webApi.handleAjaxError);
};

HANDLERS.postSend = (ctx) => {
    let sender_username = sessionStorage.getItem('username');
    let sender_name = sessionStorage.getItem('name') === '' ? null : sessionStorage.getItem('name');
    let recipient_username = ctx.params.recipient;
    let text = ctx.params.text;
    let data = {sender_username, sender_name, recipient_username, text};
    crud.sendMessage(data)
        .then(() => {
            notify.showInfo('Message sent!');
            ctx.redirect('#/archive');
        })
        .catch(webApi.handleAjaxError);

};

HANDLERS.getMessages = (ctx) => {
    let username = sessionStorage.getItem('username');
    crud.getRecipientMessages(username)
        .then((messages) => {
            if (messages) {
                messages.map(msg => {
                    msg.sender = helpers.formatSender(msg.sender_name, msg.sender_username);
                    msg.date = helpers.formatDate(msg._kmd.ect);
                });
            }
            let partials = helpers.getCommonPartials();
            partials.message = './templates/partials/message.hbs';
            ctx = helpers.getCommonContext(ctx);
            ctx.messages = messages;
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/my/myMessages.hbs');
                })
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.getArchive = (ctx) => {
    let username = sessionStorage.getItem('username');
    crud.getSenderMessages(username)
        .then((messages) => {
            if (messages) {
                messages.map(msg => {
                    msg.isSender = sessionStorage.getItem('username') === msg.sender_username;
                    msg.sender = helpers.formatSender(msg.sender_name, msg.sender_username);
                    msg.date = helpers.formatDate(msg._kmd.ect);
                });
            }
            let partials = helpers.getCommonPartials();
            partials.message = './templates/partials/message.hbs';
            ctx = helpers.getCommonContext(ctx);
            ctx.messages = messages;
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/archive/archive.hbs');
                })
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.delete = (ctx) => {
    let id = ctx.params.id.substr(1);
    crud.deleteMessage(id)
        .then(() => {
            notify.showInfo('Message deleted!');
            ctx.redirect('#/archive')
        })
        .catch(webApi.handleAjaxError);
};