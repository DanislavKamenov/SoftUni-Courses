function solve(arr, arg) {
    let sortTypes = {
        asc: (a,b) => a - b,
        desc: (a,b) => b - a
    };
    return arr.sort(sortTypes[arg])
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));