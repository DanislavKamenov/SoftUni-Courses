function spiceMustFlow([startingYield]) {
    startingYield = Number(startingYield);
    let daysCount = 0;
    let produced = 0;
    for (let i = startingYield; i >= 100; i-=10) {
        daysCount++;
        produced += i;
        produced -= 26;
    }
    produced -= 26;
    console.log(daysCount);
    console.log(produced < 0 ? 0 : produced);
}

spiceMustFlow(['0']);