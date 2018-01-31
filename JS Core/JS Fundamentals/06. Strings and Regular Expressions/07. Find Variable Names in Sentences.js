function findNamesInSentences(string) {
    let regex = /\b_([A-Za-z0-9]+)\b/g;

    let match = regex.exec(string);
    let ids = [];

    while (match) {
        ids.push(match[1]);
        match = regex.exec(string)
    }

    console.log(ids.join(','));
}

findNamesInSentences(['The _id and _age variables are both integers.']);