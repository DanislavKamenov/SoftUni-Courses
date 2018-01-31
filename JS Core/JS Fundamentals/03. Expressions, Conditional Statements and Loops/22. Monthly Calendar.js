function calendar([day, month, year]) {
    let date = new Date(year, month - 1, day);
    let monthSize = daysInMonth(date);
    let beginingOfMonth = new Date(year, month - 1, 1);
    let endOfMonth = new Date(year, month - 1, monthSize);
    let dayMilisec = 1000 * 60 * 60 * 24 - 3600000;
    let rowCount = 0;
    let html = '<table>\n<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n  <tr>';

    if (beginingOfMonth.getDay() > 0) {
        let startDate = beginingOfMonth;
        while (startDate.getDay() > 0) {
            startDate -= dayMilisec;
            startDate = new Date(startDate);
        }

        for (let i = startDate.getDate(); i <= daysInMonth(startDate); i++) {
            html += `<td class="prev-month">${i}</td>`;
            rowCount++;

            if (rowCount === 7) {
                html += '</tr>\n';
                if (i !== daysInMonth(startDate)) {
                    html += '  <tr>';
                }
                rowCount = 0;
            }
        }
    }

    for (let i = 1; i <= monthSize; i++) {
        if (date.getDate() === i) {
            html += `<td class="today">${i}</td>`;
        } else {
            html += `<td>${i}</td>`;
        }
        rowCount++;

        if (rowCount === 7) {
            html += '</tr>\n';
            if (i !== monthSize) {
                html += '  <tr>';
            }
            rowCount = 0;
        }
    }

    if (endOfMonth.getDay() !== 6) {
        let endDate = new Date(year, month, 6 - endOfMonth.getDay());

        for (let i = 1; i <= endDate.getDate(); i++) {
            html += `<td class="next-month">${i}</td>`;
            rowCount++;

            if (i === endDate.getDate()) {
                html += '</tr>\n';
            } else if (rowCount === 7) {
                html += '</tr>\n';
                if (i !== endDate.getDate()) {
                    html += '  <tr>';
                }
                rowCount = 0;
            }
        }
    }

    html += '</table>';

    console.log(html);
    //document.write(html);

    function daysInMonth(anyDateInMonth) {
        return new Date(anyDateInMonth.getFullYear(),
            anyDateInMonth.getMonth()+1, 0).getDate();
    }
}

calendar([1, 4, 2016]);