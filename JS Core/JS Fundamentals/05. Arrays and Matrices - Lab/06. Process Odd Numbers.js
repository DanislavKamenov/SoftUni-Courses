function oddNums(arr) {
    console.log(arr.filter((e, i) => i % 2 !== 0).map(e => e * 2).reverse());
}

oddNums([10, 15, 20, 25]);