function squareOfStars(n = 5) {
    for (let i = 1; i <= n; i++) {
        console.log('* '.repeat(n).trim());
    }
}

squareOfStars();