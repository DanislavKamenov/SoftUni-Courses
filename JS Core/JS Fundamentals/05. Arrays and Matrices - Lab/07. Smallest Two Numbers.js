function smallest2Nums(arr) {
    arr.sort((x, y) => x - y);

    console.log(arr[0]);
    console.log(arr[1]);
}

smallest2Nums([30, 10, 50, 100, 10, 10, 9, 11, 4, 11, 22]);