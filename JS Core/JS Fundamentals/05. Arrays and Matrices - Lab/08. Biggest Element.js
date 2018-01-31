function biggestElem(matrix) {
    console.log(Math.max(...matrix.map(x => Math.max(...x))));
}

biggestElem([[20, 50, 10],
    [8, 33, 145]]);