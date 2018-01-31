function tripLength([x1, y1, x2, y2 ,x3, y3]) {   
    function distance(x1, y1, x2, y2) {
        let distA = x1 - x2;
        let distB = y1 - y2;
        return Math.sqrt(distA**2 + distB**2);
    }

    let distance12 = distance(x1, y1, x2, y2);
    let distance13 = distance(x1, y1, x3, y3);
    let distance23 = distance(x2, y2, x3, y3);

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
}

tripLength([5, 1, 1, 1, 5, 4]);