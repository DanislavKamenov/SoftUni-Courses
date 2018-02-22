function calendar([day, month, year]) {
    let date = new Date(year, month - 1, day);
    let fragment = document.createDocumentFragment();
    let table = $('<table>');
    let caption = $(`<caption>${currentMonth(date)} ${date.getFullYear()}</caption>`);
    let tBody = $('<tbody>');
    appendDaysOfWeek();
    appendDates();
    caption.appendTo(table);
    tBody.appendTo(table);
    table.appendTo(fragment);
    $('#content').append(fragment);

    function currentMonth(date) {
        let monthIdx = date.getMonth();
        let month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        return month[monthIdx];
    }

    function appendDaysOfWeek() {
        let tr = $('<tr>');
        let days = [];
        days[0] = 'Mon';
        days[1] = 'Tue';
        days[2] = 'Wed';
        days[3] = 'Thu';
        days[4] = 'Fri';
        days[5] = 'Sat';
        days[6] = 'Sun';
        days.forEach(day => $(`<th>${day}</th>`).appendTo(tr));
        tr.appendTo(tBody);
    }

    function appendDates() {
        let dateNums = [];
        for (let i = 0; i < 28; i++) {
            dateNums[i] = '';

        }
        let monthSize = daysInMonth(month, year);
        let firstDayInMonth = new Date(year, month - 1, 1).getDay();
        let dayOfWeek = firstDayInMonth === 0 ? 7 : firstDayInMonth;
        for (let i = 0; i < monthSize; i++) {
            dateNums[dayOfWeek + i - 1] = i + 1;

        }
        if (dateNums.length > 28) {
            for (let i = dateNums.length; i < 35; i++) {
                dateNums[i] = '';
            }
        }

        if (dateNums.length > 35) {
            for (let i = dateNums.length; i < 42; i++) {
                dateNums[i] = '';
            }
        }
        console.log(dateNums);
        while (dateNums.length > 0) {
            let tr = $('<tr>');
            dateNums.splice(0, 7).forEach(weekDay =>weekDay === date.getDate() ? $(`<td>${weekDay}</td>`).addClass('today').appendTo(tr) :
                $(`<td>${weekDay}</td>`).appendTo(tr));
            tr.appendTo(tBody);
        }
    }

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
}