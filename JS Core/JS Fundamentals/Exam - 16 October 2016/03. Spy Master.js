function spyMaster(arr) {
    let key = `((?: |^)${arr.shift()})(\\s+[A-Z!%$#]{8,}(?: |\\.|,|$))`;
    let keyPattern = new RegExp(key, 'gi');
    for (let line of arr) {
        let match = keyPattern.exec(line);
        while (match) {
            if (match[2] === match[2].toUpperCase()) {
                let result = match[2].toLowerCase().replace(/!/g, '1')
                    .replace(/%/g, '2')
                    .replace(/#/g, '3')
                    .replace(/\$/g, '4');
                line = line.replace(match[0], `${match[1] + result}`);
            }
            match = keyPattern.exec(line);
        }
        console.log(line);
    }
}
let test = ['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'];
let test2 = ['enCode',
        'Some messages are just not encoded what can you do?',
        'RE - ENCODE THEMNOW! - he said.',
        'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
];
let test3 = ['tricky',
    'And now the tricky tests',
    'ricky CAREFULL!#$%; with what you decode Tricky CAREFULL!#$%',
'Tricky HERECOMESDASH- with what you decode Tricky HERECOMESDASH -',
'Try again stricky NOTTHEFIRSTONE  tricky NOTTHEFIRSTONE',
'Be very carefull now trICkY plainwrong, trICkY PLAINWRONG',
'next challenge (tRickY SOME$WORDS) tRickY SOME$WORDS',
'It\'s tricky TOUSETHECORRECTREPLACE? tricky TOUSETHECORRECTREPLACE ,',
'now with commas triCky RAND!$OM%$#TE!#XT, triCky RAND!$OM%$#TE!#XT.',
    'DON\'T match this plz TRICKY | TEXT#TEXT. TRICKY  TEXT#TEXT.',
'Try with commas -triCkY COMMAHERE, triCkY COMMAHERE, wow',];
spyMaster(test3);

