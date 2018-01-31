function arrayDelimiter(arr) {
    let delimiter = arr.pop();

    return arr.join(delimiter);
}

console.log(arrayDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));