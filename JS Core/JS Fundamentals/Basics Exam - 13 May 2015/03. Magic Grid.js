function magicGrid([message, magicNum, ...arr]) {
    magicNum = Number(magicNum);
    let matrix = arr.map(x => x.split(' ').map(Number));
    let key = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            for (let compareRow = 0; compareRow < matrix.length; compareRow++) {
                for (let compareCol = 0; compareCol < matrix[compareRow].length; compareCol++) {
                    if (matrix[row][col] + matrix[compareRow][compareCol] === magicNum && (row !== compareRow || col !== compareCol)) {
                        key = row + col + compareRow + compareCol;
                        break;
                    }
                }
            }
        }
    }
    let decodedMessage = '';
    for (let i = 0; i < message.length; i++) {
        if ( i % 2 === 0) {
            decodedMessage += String.fromCharCode(message.charCodeAt(i) + key);
        } else {
            decodedMessage += String.fromCharCode(message.charCodeAt(i) - key);
        }
    }
    console.log(decodedMessage);
}
let test1 = ['QqdvSpg',
    '400',
    '100 200 120',
    '120 300 310',
    '150 290 370'
];
let test2 = ['EfqfNhmnkynn%\`fn~',
'100',
'200 100 120 300',
'100 90 300 100',
'150 290 370 100',
'10 11 100 100'];
magicGrid(test2);