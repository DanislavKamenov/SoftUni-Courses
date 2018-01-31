function equalNeigbours(matrix) {
    function chountPairs(rowIndex, colIndex) {
        let count = 0;
        let behind = matrix[rowIndex][colIndex - 1] === matrix[rowIndex][colIndex] ? count++ : false;
        let front = matrix[rowIndex][colIndex + 1] === matrix[rowIndex][colIndex] ? count++ : false;
        let up = matrix[rowIndex - 1] !== undefined ? matrix[rowIndex - 1][colIndex] === matrix[rowIndex][colIndex] ? count++ : false : false;
        let bottom = matrix[rowIndex + 1] !== undefined ? matrix[rowIndex + 1][colIndex] === matrix[rowIndex][colIndex] ? count++ : false : false;

        return count / 2;
    }

    let pairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            pairs += chountPairs(row, col)

        }

    }
    return pairs;
    
}

console.log(equalNeigbours([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));