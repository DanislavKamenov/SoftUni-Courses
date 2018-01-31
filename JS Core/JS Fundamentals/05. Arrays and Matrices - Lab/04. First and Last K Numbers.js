function firstAndLastKNums(arr) {
    let k = arr.shift();

    for (let i = 0; i < arguments.length; i++) {
        console.log(arr.slice(0, k));
        console.log(arr.slice(arr.length - k));

    }
}

firstAndLastKNums([2, 7 ,8 ,9]);