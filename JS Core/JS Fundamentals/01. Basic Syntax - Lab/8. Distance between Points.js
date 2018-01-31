function distBetweenPoints(x1, y1, x2, y2) {
    let pointOne = {x: x1, y: y1};
    let pointTwo = {x: x2, y: y2};

    let distance = Math.pow(pointOne.x - pointTwo.x, 2) + Math.pow(pointOne.y - pointTwo.y, 2);
    return Math.sqrt(distance);
}

console.log(distBetweenPoints(2, 4, 5, 0));