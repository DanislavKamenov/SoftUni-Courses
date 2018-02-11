function filterMatrix(matrix) {
    let filterLen = Number(matrix.pop());
    let previousNum = 0;
    let currentNum = 0;
    let count = 1;
    let arr = matrix.join(' ').split(' ');
    matrix = matrix.map(x => x.split(' '));
    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i];
            if (currentNum === previousNum) {
                count++;
                if (count === filterLen) {
                    let reverse = i - filterLen + 1;
                    let length = reverse + filterLen;
                    for (reverse; reverse < length; reverse++) {
                        arr[reverse] = '';
                    }
                    count = 1;
                }
            } else {
                count = 1;
            }
        previousNum = arr[i];
    }
    //console.log(arr);
    let colOffset = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = arr[col + colOffset];
        }
        colOffset += matrix[row].length;
    }
    //console.log(matrix);
    for (let row of matrix) {
        console.log(row.join('') === '' ? '(empty)' : row.filter(x => x !== '').join(' '));
    }
}
let mat = [ '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2' ];
let mat2 = [ '1 2 3 3', '3 5 7 8', '3 2 2 1', '3' ];
let mat3 = ['1 2 3 4 5',
   'a 17 17 17 17 17',
    '17 17 17 18',
    '9 9 9 9 9 9 9 9 9 9 9 9',
    '1 9 9 9',
    '9 9 9',
    '9',
    '9',
    '9',
    '1209',
    '8'];
let mat4 = [ '1 2 3 3 2 1', '5 2 2 1 1 0', '3 3 1 3 3', '2' ];
filterMatrix(mat3);