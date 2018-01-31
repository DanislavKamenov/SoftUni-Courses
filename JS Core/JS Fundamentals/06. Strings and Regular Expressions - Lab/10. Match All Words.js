function matchAllWords(text) {
    let words = text.match(/\w+/g);

    return words.join('|')
}

console.log(matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));