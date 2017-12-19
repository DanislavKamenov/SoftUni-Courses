function keyValuePairs(arr) {
    "use strict";
    let kvp = {};
    let toPrint = null;
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
            let args = arr[i].split(' ');
            if (kvp[args[0]] === undefined){
                kvp[args[0]] = args[1];
            }
            else {
                kvp[args[0]] = args[1];
            }
        }
        else {
            toPrint = arr.pop();
            if (kvp[toPrint] === undefined) {
                console.log('None');
            }
            else {
                console.log(kvp[toPrint]);
            }
        }
    }
}
keyValuePairs(
    [
        'key value',
        'key eulav',
        'test tset',
        'key'
    ]
);