function spiralMatrix(width, height) {
    let size = width * height;
    let matrix = [[]];

    for (let row = 0; row < width; row++) {
        matrix[row] = [];
        for (let col = 0; col < height; col++) {
            matrix[row][col] = size - (width * row) + col + 1

        }

    }

    console.log(matrix);
}

spiralMatrix(5, 5);