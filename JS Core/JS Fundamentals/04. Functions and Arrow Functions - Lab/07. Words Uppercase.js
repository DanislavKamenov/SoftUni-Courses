function upperCase(words) {
    return words.toUpperCase().split(/\W+/).filter(x => x !== '').join(', ');
}

console.log(upperCase('\'Hi, how are you?\''));