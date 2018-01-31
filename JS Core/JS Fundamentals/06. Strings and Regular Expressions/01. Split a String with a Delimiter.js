function splitString(text, delimiter) {
    text.split(delimiter).forEach(word => console.log(word))
}

splitString('One-Two-Three-Four-Five',
    '-');