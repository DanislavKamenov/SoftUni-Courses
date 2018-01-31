function diagnonalSum(matrix) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length - 1 - i]

    }
    console.log(sum1 + ' ' + sum2);
}

diagnonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);