function cappyJuice(juiceArr) {
    let juices = {};
    let bottles = new Map();
    for (let juiceData of juiceArr) {
        let [name, quantity] = juiceData.split(' => ');
        juices[name] ? juices[name] += Number(quantity) : juices[name] = Number(quantity);
        if (juices[name] >= 1000) {
            bottles.set(name, juices[name]);
            bottles.set(name, Math.floor(bottles.get(name) / 1000));
        }
    }
    bottles.forEach(((value, key) => console.log(`${key} => ${value}`)))
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);