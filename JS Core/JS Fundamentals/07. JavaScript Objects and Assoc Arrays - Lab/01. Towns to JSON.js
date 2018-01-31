function townsToJSON(townData) {
    let townArgs = townData[0].split(/\s*\|\s*/);
    let prop1 = townArgs[1];
    let prop2 = townArgs[2];
    let prop3 = townArgs[3];

    let towns = [];

    for (let i = 1; i < townData.length; i++) {
        townArgs = townData[i].split(/\s*\|\s*/);
        let townName = townArgs[1];
        let townLat = Number(townArgs[2]);
        let townLon = Number(townArgs[3]);
        let newTown = {
        [prop1]: townName,
        [prop2]: townLat,
        [prop3]: townLon
        };

        towns.push(newTown);
    }

    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);