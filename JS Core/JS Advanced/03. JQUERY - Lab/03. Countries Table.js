function initializeTable() {
    $("#createLink").click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");

    function addCountryToTable(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
        .append($('<td>').text(capital))
        .append($('<td>')
            .append($('<a href="#">[Up]</a>').click(moveRowUp))
            .append($('<a href="#">[Down]</a>').click(moveRowDown))
            .append($('<a href="#">[Delete]</a>').click(deleteRow)));

        $(tr).css('display', 'none');
        $('#countriesTable').append(tr);
        tr.fadeIn(1000);
        fixLinks();
    }
    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        addCountryToTable(country.val(), capital.val());
        country.val('');
        capital.val('');
        fixLinks();
    }
    function moveRowUp() {
        let row = $(this).parent().parent();
        if (row.index() > 2) {
            row.fadeOut(1000, function () {
                row.insertBefore(row.prev());
                row.fadeIn(1000);
                fixLinks();
            })
        }
    }
    function moveRowDown() {
        let row = $(this).parent().parent();
        if (!row.is(':last-child')) {
            row.fadeOut(1000, function () {
                row.insertAfter(row.next());
                row.fadeIn(1000);
                fixLinks();
            })
        }
    }
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(1000,() => row.remove());
        fixLinks();
    }
    function fixLinks() {
        $('#countriesTable').find('tr').find('a:contains("Up")').css('display', 'inline');
        $('#countriesTable').find('tr').find('a:contains("Down")').css('display', 'inline');

        let firstRow = $('#countriesTable').find('tr')[2];
        $(firstRow).find('a:contains("Up")').css('display', 'none');

        let lastRow = $('tr');
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none');
    }
}