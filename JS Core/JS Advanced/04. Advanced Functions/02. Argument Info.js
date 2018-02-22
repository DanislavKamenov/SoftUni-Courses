function argumentInfo() {
    let args = Array.from(arguments);
    args.forEach(item => console.log(`${typeof  item}: ${item}`));
    let typeCount = [];
        args.forEach(item => typeCount[typeof item] ? typeCount[typeof item]++ : typeCount[typeof item] = 1);

    let sortedCount = [];
        args.forEach(item => sortedCount.push(typeof item));
    sortedCount
        .sort((a,b) => typeCount[b] - typeCount[a])
        .filter((v, i, a) => a.indexOf(v) === i)
        .forEach(item => console.log(`${item} = ${typeCount[item]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 58);