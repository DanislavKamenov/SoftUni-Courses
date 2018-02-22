function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.addClass('counter').val(0);
    textArea.prop('disabled', true);
    incrementBtn.addClass('btn');
    incrementBtn.prop('id', 'incrementBtn');
    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val() + 1);
    });
    addBtn.addClass('btn');
    addBtn.prop('id', 'addBtn');
    addBtn.on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });
    list.addClass('results');

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}