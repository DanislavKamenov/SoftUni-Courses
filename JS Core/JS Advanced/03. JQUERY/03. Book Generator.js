function createBook(selector, titleName, authorName, isbn) {
    let createBook = function () {
        let id = 1;
        return function (selector, titleName, authorName, isbn) {
            let container = $(selector);
            let fragment = document.createDocumentFragment();
            let div = $('<div>');
            let title = $(`<p>${titleName}</p>`);
            let author = $(`<p>${authorName}</p>`);
            let bookNum = $(`<p>${isbn}</p>`);
            let selectBtn = $('<button>Select</button>');
            let deselectBtn = $('<button>Deselect</button>');
            div.prop('id', `book${id}`);
            title.addClass('title');
            author.addClass('author');
            bookNum.addClass('isbn');
            selectBtn.on('click', function () {
                div.css('border', '2px solid blue');
            });
            deselectBtn.on('click', function () {
                div.css('border', 'none');
            });
            title.appendTo(div);
            author.appendTo(div);
            bookNum.appendTo(div);
            selectBtn.appendTo(div);
            deselectBtn.appendTo(div);
            div.appendTo(fragment);
            container.append(fragment);
            id++;
        }
    }();
    createBook(selector, titleName, authorName, isbn);
}