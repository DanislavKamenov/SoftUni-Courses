function countWordsInText(text) {
    let result = {};
    for (let str of text) {
        let currentWords = str
            .split(/[^0-9A-Za-z_]+/).filter(a => a !== '');
        for (let word of currentWords) {
            if (result.hasOwnProperty(word)) {
                result[word]++;
            } else {
                result[word] = 1;
            }
        }
    }
    console.log(JSON.stringify(result));
}
countWordsInText(['JS and Node.js', 'JS again and again', 'Oh, JS?']);