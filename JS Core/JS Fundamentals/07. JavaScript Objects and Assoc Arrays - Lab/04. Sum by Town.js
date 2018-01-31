function sumByTown(townData) {
    let towns = {};
    for (let i = 0; i < townData.length; i+=2) {
        if (towns.hasOwnProperty(townData[i])) {
            towns[townData[i]] += Number(townData[i + 1]);
        } else {
            towns[townData[i]] = Number(townData[i + 1])
        }

    }

    console.log(JSON.stringify(towns));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);