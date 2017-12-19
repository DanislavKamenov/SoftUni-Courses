function printLines(arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (arr[i] != 'Stop'){
            console.log(arr[i].toString());
        }
        else {
            break;
        }

    }
}