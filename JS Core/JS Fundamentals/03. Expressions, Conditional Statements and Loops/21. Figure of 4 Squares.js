function fourSquares(n) {
    if (n % 2 === 0) {
        for (let i = 1; i <= n - 1; i++) {
            if (i === 1 || i === n / 2 || i === n - 1) {
                console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`);
            } else {
                console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`);
            }

        }
    } else {
        for (let i = 1; i <= n; i++) {
            if (i === 1 || i === Math.ceil(n / 2) || i === n) {
                console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`);
            } else {
                console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`);
            }

        }
    }
}

fourSquares(7);