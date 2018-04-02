function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_SyF5rJe5f/books';
    const USERNAME = 'Peter';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const authHeaders = {
        'Content-type': 'application/json',
        'Authorization': 'Basic ' + BASE_64,
    };

    class Book {
        constructor(title, author, ISBN) {
            this.title = title;
            this.author = author;
            this.ISBN = ISBN;
        }
    }

    $('.add').on('click', createBook);
    $('.load').on('click', loadBooks);

    function createBook() {
        let title = $('.title');
        let author = $('.author');
        let ISBN = $('.ISBN');

        let book = new Book(title.val(), author.val(), ISBN.val());

        $.ajax({
            method: "POST",
            headers: authHeaders,
            url: URL,
            data: JSON.stringify(book)
        });
    }

    function loadBooks() {
        $.ajax({
            method: "GET",
            headers: authHeaders,
            url: URL,
            success: renderBooks
        });

        function renderBooks(books) {
            let container = $('#books');
            container.empty();
            books.forEach(book => {
                container.append($(`<div class="book" data-id="${book['_id']}">`)
                    .append($('<label>').text('Title'))
                    .append($(`<input type="text" class="title" value="${book['title']}">`))
                    .append($('<label>').text('Author'))
                    .append($(`<input type="text" class="author" value="${book['author']}">`))
                    .append($('<label>').text('ISBN'))
                    .append($(`<input type="number" class="ISBN" value="${book['ISBN']}">`))
                    .append($('<button>[Edit]</button>').click(editBook))
                    .append($('<button>[Delete]</button>').click(deleteBook)))
            });            
        }
    }

    function deleteBook(e) {
        let currentBook = $(e.target).parent();
        let id = currentBook.attr('data-id');

        $.ajax({
            method: "DELETE",
            headers: authHeaders,
            url: URL + '/' + id,
            success: () => currentBook.remove()
        });
    }
    
    function editBook(e) {
        let currentBook = $(e.target).parent();
        let id = currentBook.attr('data-id');
        let newData = currentBook.find('input');
        let book = {};
        newData.each(function (id, data) {
            book[$(data).attr('class')] = $(data).val();
        });

        $.ajax({
            method: 'PUT',
            headers: authHeaders,
            url: URL + '/' + id,
            data: JSON.stringify(book),
            success: loadBooks
        });
    }
}
