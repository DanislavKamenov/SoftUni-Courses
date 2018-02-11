function mining(arr) {
    let minePattern = /mine.*(silver|gold|diamonds)\s+:\s+([0-9]+)/;
    let gold = 0;
    let silver = 0;
    let diamonds = 0;
    for (let mineData of arr) {
     let match = minePattern.exec(mineData);
        if (match) {
            let ore = match[1];
            let amount = match[2];

            if (ore === 'gold') {
                gold += Number(amount);
            } else  if (ore === 'silver') {
                silver += Number(amount);
            } else if (ore === 'diamonds') {
                diamonds += Number(amount);
            }
        }
    }
    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamonds}`);
}

let test1 = [ 'mine bobovDol - gold : 10',
    'mine medenRudnik - silver : 22',
    'mine chernoMore - shrimps : 24',
    'gold:50',
    '',
    '' ];
let test2 = [ 'mine bobovdol - gold: 10',
    'mine - diamonds: 5',
    'mine colas - wood: 10',
    'mine myMine - silver:  14',
    'mine silver:14 - silver : 14',
    '',
    '' ];


mining(test2);