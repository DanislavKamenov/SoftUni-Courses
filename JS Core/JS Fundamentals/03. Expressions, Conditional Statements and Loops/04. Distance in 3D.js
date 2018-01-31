function distance3D(points) {
    let x1 = points[0];
    let y1 = points[1];
    let z1 = points[2];
    let x2 = points[3];
    let y2 = points[4];
    let z2 = points[5];

    let distance1 = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2) + ((z1 - z2) ** 2));
    console.log(distance1);

    points.splice()
}

distance3D([1, 1, 0, 5, 4, 0]);