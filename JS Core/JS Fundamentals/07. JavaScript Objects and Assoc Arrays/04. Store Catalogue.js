function catalogue(productArr) {
    let products = {};
    let letter;
    productArr.forEach(item => (products[item.split(' : ')[0]] = item.split(' : ')[1]));
    Object.keys(products).sort().forEach((key) => {
        if (letter !== key[0]){
            console.log(key[0]);
            letter = key[0];
        }
        console.log(`  ${key}: ${products[key]}`)
    });
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);