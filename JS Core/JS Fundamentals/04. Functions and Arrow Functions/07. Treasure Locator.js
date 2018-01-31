function treasureHunter(points) { 
    function isOnIsland(x, y) {
        let islands = {
            'Tokelau': {x1: 8, x2: 9, y1: 0, y2: 1},
            'Tuvalu': {x1: 1, x2: 3, y1: 1, y2: 3},
            'Samoa': {x1: 5, x2: 7, y1: 3, y2: 6},
            'Tonga': {x1: 0, x2: 2, y1: 6, y2: 8},
            'Cook': {x1: 4, x2: 9, y1: 7, y2: 8}
        };

        for (let island in islands) {
            let islandX1 =islands[island].x1;
            let islandX2 =islands[island].x2;
            let islandY1 =islands[island].y1;
            let islandY2 =islands[island].y2;

            if (x >= islandX1 && x <= islandX2 && y >= islandY1 && y <= islandY2) {
                return island;
            }
        } 
        return 'On the bottom of the ocean';
    }

    for (let i = 0; i < points.length; i+=2) {
        let x = points[i];
        let y = points[i+1];

        console.log(isOnIsland(x, y));
    }
}
treasureHunter([6, 4]);