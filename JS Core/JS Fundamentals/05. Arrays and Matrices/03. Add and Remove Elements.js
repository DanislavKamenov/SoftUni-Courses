function addAndRemove(input) {
    let commands = {
        add: (arr, cmdCount) => arr.push(cmdCount),
        remove: (arr) => arr.pop()
    };



    let arr = [];
    let cmdCount = 1;

    for (let i = 0; i < input.length; i++) {
        commands[`${input[i]}`](arr, cmdCount);
        cmdCount++;
    }

    console.log(arr.join('\n'));

    if (arr.length === 0) {
        console.log('Empty');
    }
}

addAndRemove([]);