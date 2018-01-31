function diagonalAttack(strings) {
    let matrix = [];

    for (let i = 0; i < strings.length; i++) {
        matrix[i] = Array.from(strings[i].split(' ').map(Number));

    }

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length - 1 - i]

    }

    if (sum1 === sum2) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i === j || j === matrix.length - i - 1) {
                    continue;
                }
                matrix[i][j] = sum1;
            }

        }
        console.log(matrix.map(x => x.join(' ')).join('\n'));
    } else {
        console.log(matrix.map(x => x.join(' ')).join('\n'));
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])