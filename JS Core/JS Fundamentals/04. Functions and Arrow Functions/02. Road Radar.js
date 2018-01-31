function roadRadar([speed, area]) {
    let limit = speedLimit(area);
    let speedDif = speed - limit;
    let infraction = '';

    if (speedDif >= 1 && speedDif <= 20) {
        infraction = 'speeding';
    } else if(speedDif > 20 && speedDif <= 40) {
        infraction = 'excessive speeding';
    } else if (speedDif > 40) {
        infraction = 'reckless driving';
    }

    return infraction;
    
    function speedLimit(area) {
        let limit = 0;
        switch (area) {
            case 'motorway':
                limit = 130;
                break;
            case 'interstate':
                limit = 90;
                break;
            case 'city':
                limit = 50;
                break;
            case 'residential':
                limit = 20;
                break;
        }
        return limit;
    }
}

console.log(roadRadar([40, 'city']));