class Contact {
     constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._element = this._initContact();
        this.online = false;
    }

    set online(bool) {
         let title = $(this._element).find('.title');
         if (bool) {
             title.addClass('online');
         } else if (bool === false) {
             title.removeClass('online');
         }
         this._online = bool;
    }

    get online() {
         return this._online;
    }

    _initContact() {
        let article = $('<article>');
        let title = $(`<div class="title">${this.firstName} ${this.lastName}</div>`);
        let infoBtn = $('<button>&#8505;</button>');
        let info = $('<div class="info"></div>').css('display', 'none');
        $(`<span>&phone; ${this.phone}</span>`).appendTo(info);
        $(`<span>&#9993; ${this.email}</span>`).appendTo(info);
         infoBtn.on('click', () => info.toggle());

         infoBtn.appendTo(title);
         title.appendTo(article);
         info.appendTo(article);
         return article;
    }

    render(id) {
         this._element.appendTo($(`#${id}`));
    }
}

let contact = new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com');
contact.render('main');

//$(".info[display='block']")