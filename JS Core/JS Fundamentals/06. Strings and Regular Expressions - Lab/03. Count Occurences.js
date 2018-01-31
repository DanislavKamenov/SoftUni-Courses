function countStringInText(str, text) {
    let count = 0;
    let index = text.indexOf(str);
    while (index > -1) {
        count++;
        index = text.indexOf(str, index + 1);
    }
    return count;
}
    console.log(countStringInText('the', 'The quick brown fox jumps over the lay dog.'));