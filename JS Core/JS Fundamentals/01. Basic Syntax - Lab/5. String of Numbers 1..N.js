function numsOneToN(n) {
    let num = Number(n);
    let numsToString = '';
    for (let i = 1; i <= num; i++) {
        numsToString += i;
    }
    console.log(numsToString);
}

numsOneToN('11');