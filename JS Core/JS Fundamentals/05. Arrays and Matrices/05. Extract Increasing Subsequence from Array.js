function increasingSeq(arr) {
    let output = [];
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            output.push(arr[i]);
            max = arr[i];
        }

    }
    console.log(output.join('\n'));
}

increasingSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);