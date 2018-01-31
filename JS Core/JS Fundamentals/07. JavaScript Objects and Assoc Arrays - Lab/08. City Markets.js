function cityMarkets(arr) {
    let townMap = new Map();

    for (let data of arr) {
        let [town, product, value] = data.split(' -> ');
        let args = value.split(' : ');
        let sales  = Number(args[0]) * Number(args[1]);
        if (!townMap.has(town)) {
            townMap.set(town, new Map());
            townMap.get(town).set(product, sales)
        } else {
            if (!townMap.get(town).has(product)) {
                townMap.get(town).set(product, sales)
            } else {
                townMap.get(town).set(product, townMap.get(town).get(product) + sales);
            }
        }
    }

    for (let [key, value] of townMap) {
        console.log(`Town - ${key}`);
        for (let [productKey, productValue] of value) {
            console.log(`$$$${productKey} : ${productValue}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Laptops HP -> 300 : 3000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);