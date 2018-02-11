function bunnyKill(bunnyData) {
    let bombCoords = bunnyData.pop().split(' ').map(str => str.split(',').map(Number));
    let bunnyMatrix = bunnyData.map(str => str.split(' ').map(Number));
    let snowballDmg = 0;
    let snowballKills = 0;

    for (let [row, col] of bombCoords) {
        let explosionDmg = bunnyMatrix[row][col];
        if (explosionDmg <= 0) continue;
        snowballDmg += explosionDmg;
        snowballKills++;
        if (bunnyMatrix[row - 1] && bunnyMatrix[row - 1][col - 1]) {
            bunnyMatrix[row - 1][col - 1] -= explosionDmg;
        }
        if (bunnyMatrix[row - 1] && bunnyMatrix[row - 1][col]) {
            bunnyMatrix[row - 1][col] -= explosionDmg;
        }
        if (bunnyMatrix[row - 1] && bunnyMatrix[row - 1][col + 1]) {
            bunnyMatrix[row - 1][col + 1] -= explosionDmg;
        }
        if (bunnyMatrix[row] && bunnyMatrix[row][col - 1]) {
            bunnyMatrix[row][col - 1] -= explosionDmg;
        }
        if (bunnyMatrix[row] && bunnyMatrix[row][col]) {
            bunnyMatrix[row][col] -= explosionDmg;
        }
        if (bunnyMatrix[row] && bunnyMatrix[row][col + 1]) {
            bunnyMatrix[row][col + 1] -= explosionDmg;
        }
        if (bunnyMatrix[row + 1] && bunnyMatrix[row + 1][col - 1]) {
            bunnyMatrix[row + 1][col - 1] -= explosionDmg;
        }
        if (bunnyMatrix[row + 1] && bunnyMatrix[row + 1][col]) {
            bunnyMatrix[row + 1][col] -= explosionDmg;
        }
        if (bunnyMatrix[row + 1] && bunnyMatrix[row + 1][col + 1]) {
            bunnyMatrix[row + 1][col + 1] -= explosionDmg;
        }
    }

    for (let row = 0; row < bunnyMatrix.length; row++) {
        for (let col = 0; col < bunnyMatrix[row].length; col++) {
            if (bunnyMatrix[row][col] > 0) {
                snowballDmg += bunnyMatrix[row][col];
                snowballKills++;
                bunnyMatrix[row][col] = 0
            }
        }
    }
    console.log(snowballDmg);
    console.log(snowballKills);
}
let strs = ['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
];
bunnyKill(strs);