function sortArray(arr) {
    arr.sort((a, b) => a.length - b.length === 0 ? a > b : a.length - b.length);
    console.log(arr.join('\n'));
}

sortArray(['test', 'Deny', 'omen', 'Default']);