function inventory(heroArr) {
    let heroData = [];
    for (let gear of heroArr) {
        let [name, level, items] = gear.split(' / ');
        let hero = {
            name: name,
            level: Number(level),
            items: items === undefined ? [] : items.split(', ')
        };
        heroData.push(hero)
    }
    console.log(JSON.stringify(heroData));
}

inventory(
    ['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);