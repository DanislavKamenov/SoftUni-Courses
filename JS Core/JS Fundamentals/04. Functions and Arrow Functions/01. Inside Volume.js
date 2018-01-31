function insideVolume(coordinates) {
    for (let i = 0; i < coordinates.length; i+= 3) {
        let x = coordinates[i];
        let y = coordinates[i+1];
        let z = coordinates[i+2];

        if (inVolume(x, y, z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
    
    function inVolume(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true
                }
            }
        }
    }
}

insideVolume([8, 20, 22]);