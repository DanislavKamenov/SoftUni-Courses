function addOrRemoveElements(arr) {
    "use strict";
    let myArray = [];
    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split(' ');
        let command = args[0];
        if (command === 'add'){
            let element = args[1];
            myArray.push(element);
        }
        else {
            let index = args[1];
            myArray.splice(index, 1);
        }
    }
    for (let value of myArray) {
        console.log(value);
    }
}

addOrRemoveElements(
    [
        'add 5',
        'add 8',
        'add 3',
        'remove 2'
    ]
);