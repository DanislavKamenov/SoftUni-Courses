function airport(log) {
    log = log.filter(x => x !== '');
    let planesLeft = {};
    let townData = {};
    for (let data of log) {
        let [planeId, town, people, action] = data.split(' ');
        people = Number(people);
        if (action === 'land') {
            if (!planesLeft.hasOwnProperty(planeId)) {
                planesLeft[planeId] = {
                    town: town,
                    arrivals: people,
                    departures: 0,
                    action: action
                };
                if (!townData.hasOwnProperty(town)) {
                    townData[town] ={
                        arrivals: people,
                        departures: 0,
                        id: new Set([planeId])
                    };
                } else {
                    townData[town]['arrivals'] += people;
                    townData[town]['id'].add(planeId);
                }
            }
        } else {
            if (planesLeft.hasOwnProperty(planeId)) {
                if (planesLeft[planeId]['action'] !== action){
                    delete planesLeft[planeId];
                    if (!townData.hasOwnProperty(town)) {
                        townData[town] ={
                            arrivals: 0,
                            departures: people,
                            id: new Set([planeId])
                        };
                    } else {
                        townData[town]['departures'] += people;
                        townData[town]['id'].add(planeId);
                    }
                }
            }
        }
    }
    let sortedPlanesLeft = Object.keys(planesLeft).sort((a, b) => a.localeCompare(b));
    console.log('Planes left:');
    for (let plane of sortedPlanesLeft) {
        console.log(`- ${plane}`);
    }
    let sortedTowns = Object.keys(townData).sort(((a, b) => {
        let result = townData[b]['arrivals'] - townData[a]['arrivals'];
        if (result === 0) {
            return a.localeCompare(b);
        }
        return result;
    }));
    for (let town of sortedTowns) {
        console.log(town);
        console.log(`Arrivals: ${townData[town]['arrivals']}`);
        console.log(`Departures: ${townData[town]['departures']}`);
        console.log('Planes:');
        for (let plane of [...townData[town]['id']].sort((a, b) => a.localeCompare(b))) {
            console.log(`-- ${plane}`);
        }
    }
}
let arr = ["Boeing474 Madrid 300 land", "Boeing474 Elin-Pelin 300 depart"];
let arr2 = ["Airbus Paris 356 land",  "Airbus London 321 land",  "Airbus Paris 213 depart",  "Airbus Ljubljana 250 land"];
airport(arr);