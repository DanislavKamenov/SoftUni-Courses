function uniqueSequences(sequences) {
    let distinctSeq = new Set();
    sequences.map(arr => JSON.parse(arr).sort((a, b) => b - a))
        .sort((a, b) => a.length - b.length)
        .forEach(seq => distinctSeq.add(seq.join(', ')));
    distinctSeq.forEach(arr => console.log(`[${arr}]`));
}

uniqueSequences(['[0.000005]','[1, 2]','[1]', '[1, 2, 3]',
    '[4, 5, 6]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);