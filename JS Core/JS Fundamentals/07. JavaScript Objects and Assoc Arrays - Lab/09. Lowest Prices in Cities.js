    function lowestPrices(sales) {
        let productsPrices = new Map();
        for (let sale of sales) {
            let [town, product, price] = sale.split(' | ');
            if (!productsPrices.has(product)) {
                productsPrices.set(product, new Map());
            }
            productsPrices.get(product).set(town, Number(price));
        }

        for (let [product, locations] of productsPrices) {
            let sortedPrices = Array.from(locations.keys()).sort(((a, b) => locations.get(a) - locations.get(b)));
            console.log(`${product} -> ${locations.get(sortedPrices[0])} (${(sortedPrices[0])})`);
        }
    }

lowestPrices(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'Washington City | Audi | 100000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);