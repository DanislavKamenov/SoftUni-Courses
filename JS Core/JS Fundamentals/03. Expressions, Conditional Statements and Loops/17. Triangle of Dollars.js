function triangleOfDollars(n) {
    let line = '';

    for (let i = 1; i <= n; i++) {
        line += '$'.repeat(i);
        line += '\n';
    }
    console.log(line);
}
triangleOfDollars(3);