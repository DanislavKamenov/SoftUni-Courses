function oddOrEven(a) {
    if (a % 2 === 0) {
        return "even";
    } else if (Math.abs(a % 2) === 1) {
        return "odd"
    } else {
        return "invalid"
    }
}

console.log(oddOrEven(5));;