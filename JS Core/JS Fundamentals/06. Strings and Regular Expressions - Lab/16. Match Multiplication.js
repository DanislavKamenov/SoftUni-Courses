function matchMultiplication(bill) {
    let regex = /(-?[0-9]+) *\* *(-?[0-9][.0-9]*)/g;

    bill = bill.replace(regex,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(bill);
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');