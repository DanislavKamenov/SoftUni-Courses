function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let floorCount = 1;
    for (let i = base; i >= 1; i-= 2) {
        if (i === 1 || i === 2) {
            gold += i ** 2 * increment;
        }else if (floorCount % 5 === 0) {
            let stoneArea = (i - 2) ** 2;
            stone += stoneArea * increment;
            lapis += (4 * i - 4) * increment;
        } else {
            let totalArea = i ** 2;
            let stoneArea = (i - 2) ** 2;
            let marbleArea = totalArea - stoneArea;
            stone += stoneArea * increment;
            marble += marbleArea * increment;
        }
        floorCount++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((floorCount - 1) * increment)}`);
}


pyramid(22, 0.25);