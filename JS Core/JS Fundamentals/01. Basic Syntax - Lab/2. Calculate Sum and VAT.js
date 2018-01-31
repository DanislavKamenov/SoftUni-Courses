function sumAndVat(prices) {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];
        sum += currentPrice;
    }
    let vat = sum * 0.20;
    let total = sum + vat;

    console.log(sum);
    console.log(vat);
    console.log(total);
}

sumAndVat([1.20, 2.60, 3.50]);