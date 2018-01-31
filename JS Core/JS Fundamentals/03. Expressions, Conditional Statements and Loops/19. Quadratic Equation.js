function quadricEquation(a, b ,c) {
    let d = (b ** 2) - 4 *( a * c);

    if (d < 0) {
        return 'No';
    }

    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);

    if (d === 0) {
        return x1;
    }

    return x1 < x2 ? x1 + '\n' + x2 : x2 + '\n' + x1;
}

console.log(quadricEquation(5, 2, 1));