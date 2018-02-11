function buildAWall(wall) {
    let materials = [];
    let cost = 0;
    wall = wall.map(Number);
    wall = wall.filter(x => x < 30);
    while (wall.length > 0) {
        wall = wall.map(sect => sect += 1);
        materials.push(195 * wall.length);
        wall = wall.filter(x => x < 30)
    }
    console.log(materials.join(', '));
    cost = materials.reduce((a,b) => a + b) * 1900;
    console.log(`${cost} pesos`);
}

buildAWall(['17', '22', '17', '19', '17']
);