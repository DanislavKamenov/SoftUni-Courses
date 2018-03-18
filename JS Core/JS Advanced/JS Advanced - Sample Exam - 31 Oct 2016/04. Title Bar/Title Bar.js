//if fail create this.title prop
//try this._initElement
class TitleBar {
    constructor(title) {
        this._element = TitleBar._initElement(title);
    }

    static _initElement(title) {
        let header = $('<header class="header">');
        let headerRow = $('<div class="header-row">');
        let btn = $('<a class="button">&#9776;</a>');
        let spanTitle = $(`<span class="title">${title}</span>`);
        let drawer = $('<div class="drawer">').hide();
        let menu = $('<nav class="menu">');

        menu.appendTo(drawer);

        btn.appendTo(headerRow);
        spanTitle.appendTo(headerRow);
        headerRow.appendTo(header);
        drawer.appendTo(header);

        btn.on('click', () => {drawer.toggle()});

        return header;
    }

    addLink(href, name) {
        let menu = this._element.find('.menu');
        let link = $(`<a class="menu-link" href="${href}">${name}</a>`);
        link.appendTo(menu);
    }

    appendTo(selector) {
        this._element.prependTo($(selector));
    }
}

let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');
