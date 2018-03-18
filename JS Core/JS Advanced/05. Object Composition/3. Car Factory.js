function carFactory(requirements) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: '' }, { type: 'coupe', color: '' }];
    let wheels = requirements.wheelsize % 2 === 0 ? requirements.wheelsize - 1 : requirements.wheelsize;
    let car = Object.assign({}, requirements);
    delete car.power;
    delete car.color;
    car.engine = engines.filter(eng => eng.power >= requirements.power)[0];
    car.carriage = carriages.filter(carr => carr.type === requirements.carriage)[0];
    car.carriage.color = requirements.color;
    car.wheelsize = [wheels, wheels, wheels, wheels];

    return car;
}

carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);