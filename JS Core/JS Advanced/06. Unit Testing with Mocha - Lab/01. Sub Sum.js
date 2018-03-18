function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex >= arr.length ? arr.length  - 1: endIndex;
    let output = 0;
    for (let i = startIndex; i <= endIndex; i++) {
           output += Number(arr[i]);
    }
    return output;
}

console.log(subsum([10, 20, 20, 40, 50, 60, 'test'], 3, 300));