function dayOfWeek(day) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index  = arr.indexOf(day);

    return index > -1 ? index + 1 : 'error';
}

console.log(dayOfWeek('Frabjoyousday'));