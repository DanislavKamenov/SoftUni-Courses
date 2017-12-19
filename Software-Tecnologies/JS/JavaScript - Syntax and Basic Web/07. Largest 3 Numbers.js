function largest3Nums(arr) {
    array = arr.map(Number);
    array = array.sort((a, b) => b - a);
    let count = Math.min(3, arr.length);
    for (let i = 0; i < count; i++) {
        console.log(array[i]);

    }
}
largest3Nums(['10', '30', '15', '20', '50', '5'])

