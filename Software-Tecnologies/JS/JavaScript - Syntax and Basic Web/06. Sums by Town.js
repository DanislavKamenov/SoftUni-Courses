function TownsAndIncome(jsonArr) {
    let objects = jsonArr.map(JSON.parse);
    let sums = {};
    for (let obj of objects) {
        if (obj.town in sums){
            sums[obj.town] += obj.income;
        }else {
            sums[obj.town] = obj.income;
        }
    }
    let towns = Object.keys(sums).sort();
    for (let town of towns) {
        console.log(`${town} -> ${sums[town]}`);
    }
}
let arr = TownsAndIncome(['{"town":"Varna","income":120}',
    '{"town":"Sofia","income":200}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}']);