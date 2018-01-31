function wordOccurences(text, word) {
    word = `\\b${word}\\b`;
    let regex = new RegExp(word, 'ig');

    console.log(regex.test(text) ? text.match(regex).length : 0);
    console.log(text.match(regex));
}

wordOccurences('The waterfall was so high, that the child couldn’t see its peak.',  '\\');