function magicMatrices(matrix) {
    let sum = matrix[0].reduce((x, y) => x + y);
    let isMagic = true;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((x, y) => x + y) !== sum || matrix.length !== matrix[i].length) {
            isMagic = false;
            break;
        }

    }
    console.log(isMagic);
}

magicMatrices([
    [5, 5, 5],
    [6, 4, 5],
    [7, 3, 5]]

);