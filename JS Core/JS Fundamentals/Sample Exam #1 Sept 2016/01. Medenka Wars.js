function medenkaWars(combatLog) {
    let vitkorDmg = 0;
    let naskorDmg = 0;
    let lastColor = '';
    let lastViktorDamage = '';
    let lastNaskorDamage = '';
    let naskorCount = 1;
    let viktorCount = 1;
    for (let attack of combatLog) {
        let [number, color] = attack.split(' ');
        if (color === 'white') {
            if (lastViktorDamage === Number(number) * 60) {
                viktorCount++;
            } else {
                viktorCount = 1;
            }
        } else {
            if (lastNaskorDamage === Number(number) * 60) {
                naskorCount++;
            } else {
                naskorCount = 1;
            }
        }
        switch (color){
            case 'white':
                lastColor = 'white';
                lastViktorDamage = 60 * Number(number);
                if (viktorCount === 2) {
                    vitkorDmg += (60 * Number(number)) * 2.75;
                    viktorCount = 0;
                } else {
                    vitkorDmg += 60 * Number(number);
                }
                break;
            case 'dark':
                lastColor = 'dark';
                if (naskorCount === 5) {
                naskorDmg += lastNaskorDamage = (60 * Number(number)) * 4.5;
                naskorCount = 1;
            } else {
                naskorDmg += lastNaskorDamage = 60 * Number(number);
            }
                break;
        }
    }
    let winnerName = vitkorDmg > naskorDmg ? 'Vitkor' : 'Naskor';
    let winnerDmg = vitkorDmg > naskorDmg ? vitkorDmg : naskorDmg;

    console.log(`Winner - ${winnerName}`);
    console.log(`Damage - ${winnerDmg}`);
}

medenkaWars(['2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',

]);