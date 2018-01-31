function expressionSplit(text) {
    let regex = /[,;().\s]+/;
    return text.split(regex).join('\n')
}

console.log(expressionSplit('let sum = 4 * 4,b = "wow";'));