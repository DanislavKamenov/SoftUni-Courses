function autoEngineeringCompany(carsArr) {
    let cars = new Map();
    for (let carInfo of carsArr) {
        let [brand, model, produced] = carInfo.split(' | ');
        produced = Number(produced);
        if (!cars.has(brand)) {
            cars.set(brand, new Map([[model, produced]]));
        } else if (!cars.get(brand).has(model)) {
            cars.get(brand).set(model, produced);
        } else {
            cars.get(brand).set(model, cars.get(brand).get(model) + produced);
        }
    }
    for (let [brand, modelProduced] of cars) {
        console.log(brand);
        modelProduced.forEach((produced, model) => console.log(`###${model} -> ${produced}`))
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);