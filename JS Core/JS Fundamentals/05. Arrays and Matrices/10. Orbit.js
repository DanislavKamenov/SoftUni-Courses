function orbit([width, height, x, y]) {
    let matrix = [width];

    for (let i = 0; i < width; i++) {
        matrix[i] = [];
        for (let j = 0; j < height; j++) {
            matrix[i][j] = 0;

        }

    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            matrix[row][col] = Math.max(Math.abs(x - row),Math.abs(y - col)) + 1;

        }

        
    }
    console.log(matrix.map(x => x.join(' ')).join('\n'));
}

orbit([4,4,0,0]);