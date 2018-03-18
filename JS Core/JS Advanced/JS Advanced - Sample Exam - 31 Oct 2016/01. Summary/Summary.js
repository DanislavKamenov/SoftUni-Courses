function Summary(btnSelector) {
    let addBtn = $(btnSelector);
    addBtn.on('click', function () {
        let content = $('#content');
        let contentText = content.find('strong').text();
        let summary = $('<div id="summary"><h2>Summary</h2></div>');
        let paragraph = $('<p>');
        paragraph.text(contentText);
        summary.append(paragraph);
        content.parent().append(summary);
    });
}