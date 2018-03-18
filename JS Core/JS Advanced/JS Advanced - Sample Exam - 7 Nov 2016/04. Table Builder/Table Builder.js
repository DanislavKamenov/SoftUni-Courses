function tableBuilder(selector) {
    function createTable(columnNames) {
        let table = $('<table>');
        let tr = $('<tr>');
        for (let name of columnNames) {
            $(`<th>`).text(name).appendTo(tr);
        }
        $(`<th>Action</th>`).appendTo(tr);
        tr.appendTo(table);
        $(selector).html(table);
    }
    
    function fillData(dataRows) {
        for (let row of dataRows) {
            let tr = $('<tr>');
            row.forEach(item => {
                $('<td>').text(item).appendTo(tr);
            });
            let btn = $('<button>Delete</button>');
            btn.on('click', function () {
                $(this).parent().parent().remove();
            });
            $($('<td>').append(btn)).appendTo(tr);
            tr.appendTo($(selector).find('> table'));
        }
    }
    return {createTable, fillData}
}
