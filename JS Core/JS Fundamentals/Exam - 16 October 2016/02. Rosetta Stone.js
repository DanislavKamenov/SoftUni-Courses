function rosettaStone(input) {
   let decodeMatLength = Number(input.shift());
   let decodeMat = input.splice(0, decodeMatLength).map(x => x.split(' ').map(Number));
   let messageMat = input.map(x => x.split(' ').map(Number));
   let rosettaStone = [':'];
    for (let i = 65; i <= 90; i++) {
        rosettaStone.push(String.fromCharCode(i));
    }

        for (let row = 0; row < messageMat.length; row++) {
            for (let col = 0; col < messageMat[row].length; col++) {
                messageMat[row][col] = rosettaStone[(messageMat[row][col] + decodeMat[row % decodeMat.length][col % decodeMat[0].length]) % 27];
            }
        }
    console.log(messageMat.map(row => row.join('')).join('').replace(/:/g, ' '));
}

rosettaStone(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']

);
