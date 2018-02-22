function domSearch(wrapper, isCaseSensitive) {
    let container = $(wrapper);
    let fragment = document.createDocumentFragment();
    let addDiv = $('<div>').addClass('add-controls');
    let addLabel = $('<label>Enter text: </label>');
    let addInput  = $('<input>');
    let addBtn = $('<a>Add</a>').addClass('button');
    addBtn.on('click', function () {
        let li = $('<li>').addClass('list-item');
        let deleteBtn = $('<a>X</a>').addClass('button');
        deleteBtn.on('click', function () {
            let liToDelete = ($(this).parent());
            liToDelete.remove();
        });
        let boldText = $(`<strong>${addInput.val()}</strong>`);
        deleteBtn.appendTo(li);
        boldText.appendTo(li);
        li.appendTo(resultList);
    });
    addBtn[0].style = 'display: inline-block';
    addInput.appendTo(addLabel);
    addLabel.appendTo(addDiv);
    addBtn.appendTo(addDiv);
    addDiv.appendTo(fragment);

    let searchDiv = $('<div>').addClass('search-controls');
    let searchLabel = $('<label>Search:</label>');
    let searchInput  = $('<input>');
    searchInput.on('change', function () {
        if (isCaseSensitive) {
            let searchVal = searchInput.val();
            resultList.children().show();
            resultList.children().filter((idx, el) => !el.textContent.includes(searchVal)).hide();
        } else {
            let searchVal = searchInput.val().toLowerCase();
            resultList.children().show();
            resultList.children().filter((idx, el) => !el.textContent.toLowerCase().includes(searchVal)).hide();
        }
    });
    let searchBtn = $('<a>Search</a>').addClass('button');
    searchBtn[0].style = 'display: inline-block';
    searchInput.appendTo(searchLabel);
    searchLabel.appendTo(searchDiv);
    searchDiv.appendTo(fragment);

    let resultDiv = $('<div>').addClass('result-controls');
    let resultList = $('<ul>').addClass('items-list');
    resultList.appendTo(resultDiv);
    resultDiv.appendTo(fragment);
    container.append(fragment);

}