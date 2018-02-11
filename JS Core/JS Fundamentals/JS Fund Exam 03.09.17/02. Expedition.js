function expedition([primMat, secMat,overlayCoords, startingCoords]) {
    for (let i = 0; i < overlayCoords.length; i++) {
        let [offsetX, offsetY] = overlayCoords[i];
        for (let row = 0; row < Math.min(primMat.length, secMat.length); row++) {
            if (primMat[row + offsetX] === undefined) break;
            for (let col = 0; col < Math.min(primMat[row].length, secMat[row].length); col++) {
                if (secMat[row][col] === 1) {
                    if (primMat[row + offsetX][col + offsetY] === undefined) break;
                    primMat[row + offsetX][col + offsetY] === 0 ? primMat[row + offsetX][col + offsetY] = 1 : primMat[row + offsetX][col + offsetY] = 0;
                }
            }
        }
    }
    //console.log(primMat);

    let count = 1;
    let [startRow, startCol] = startingCoords;
    let currentRow = startRow, currentCol = startCol;
    for (currentRow; currentRow < primMat.length;) {
        for (currentCol; currentCol < primMat[currentRow].length;) {
            if (primMat[currentRow - 1] && primMat[currentRow - 1][currentCol] === 0) {
                primMat[currentRow][currentCol] = 2;
                currentRow -= 1;
            } else if (primMat[currentRow + 1] && primMat[currentRow + 1][currentCol] === 0) {
                primMat[currentRow][currentCol] = 2;
                currentRow += 1;
            } else if (primMat[currentRow] && primMat[currentRow][currentCol - 1] === 0) {
                primMat[currentRow][currentCol] = 2;
                currentCol -= 1;
            } else if (primMat[currentRow] && primMat[currentRow][currentCol + 1] === 0) {
                primMat[currentRow][currentCol] = 2;
                currentCol += 1;
            } else {
                let quadrant = 0;
                if (currentRow >= primMat.length / 2) {
                    currentCol >= primMat[currentRow].length / 2? quadrant = 4 : quadrant = 3;
                } else {
                    currentCol >= primMat[currentRow].length / 2? quadrant = 1 : quadrant = 2;
                }
                console.log(count);
                console.log(`Dead end ${quadrant}`);
                return;
            }
            count++;

            if (currentRow !== startRow || currentCol !== startCol) {
                if (currentRow !== 0 && currentRow !== primMat.length - 1 && currentCol > 0 && currentCol < primMat[currentRow].length - 1) {
                    continue;

                }
                let side = '';
                if (primMat[currentRow][currentCol] === 0) {
                    if (currentRow === 0) {
                        side = 'Top';
                    } else if (currentRow === primMat.length - 1) {
                        side = 'Bottom';
                    } else if (currentCol === 0) {
                        side = 'Left';
                    } else if (currentCol === primMat[currentRow].length - 1) {
                        side = "Right";
                    }
                    console.log(count);
                    console.log(side);
                    return;
                }
            }
        }

    }
} 

let matrix = [[[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]];
let matrix2 = [[[1, 1],
        [1, 1],
        [0, 0],
        [1, 1],
        [1, 1],
        [1, 1]],
    [[0, 0], [0, 0]],
    ['STOP'],
    [2, 1]];




expedition(matrix2);