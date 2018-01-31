function modifyAverage(num) {
    while (num.toString().split('').reduce((x, y) => Number(x) + Number(y)) / num.toString().length <= 5) {
        num += '9';
    }
    return num;
}

console.log(modifyAverage(101));