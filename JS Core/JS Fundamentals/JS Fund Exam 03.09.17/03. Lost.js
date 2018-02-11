function lost(keyword, text) {
    let locationPattern = /(east|north)(?:.*?)([\d]{2})[^,]*?,[^,]*?([\d]{6})/gis;
    let messagePatternString = `${keyword}(.*)${keyword}`;
    let messagePattern = new RegExp(messagePatternString);
    let locationMatch = text.match(locationPattern).map(str => str.toLowerCase());
    let eastArr = locationMatch.filter(coords => coords.startsWith('east'));
    let eastArgs = locationPattern.exec(eastArr[eastArr.length - 1]);
    let east = `${eastArgs[2]}.${eastArgs[3]} E`;
    locationPattern.lastIndex = 0;
    let northArr = locationMatch.filter(coords => coords.startsWith('north'));
    let northArgs = locationPattern.exec(northArr[northArr.length - 1]);
    let north = northArgs ? `${northArgs[2]}.${northArgs[3]} N` : '';
    let message = messagePattern.exec(text)[1];

    console.log(north);
    console.log(east);
    console.log(`Message: ${message}`);
}

let key = '&amp', words =
'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532';
let key2 = '&amp', words2 =
'(&ampThe only time to eat diet food is while you\'re waiting for the steak to cook&amp(east)(23),(234567)\tNORTH\n' +
    '48,(((543678';

lost(key2, words2);