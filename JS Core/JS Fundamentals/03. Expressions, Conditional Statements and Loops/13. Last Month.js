function lastMonth(date) {
    let day = date[0];
    let month = date[1];
    let year = date[2];

    let newDate = new Date(year, month - 1, 0);
    let daysCount = newDate.getDate();

    return daysCount;
}

console.log(lastMonth([17, 3, 2002]));