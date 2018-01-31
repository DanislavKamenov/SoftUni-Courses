function lastKNums(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        result[i] = result.slice(Math.max(0, result.length - k),i + k).reduce((x, y) => x + y)

    }
    console.log(result);
}

lastKNums(6, 3);