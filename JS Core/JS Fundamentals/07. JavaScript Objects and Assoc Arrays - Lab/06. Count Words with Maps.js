function countWordsWithMaps(arr) {
    let map = new Map();
    for (let str of arr) {
        let words = str.split(/[^0-9A-Za-z_]/).filter(x => x !== '');
        for (let word of words) {
            word = word.toLowerCase();
            if (map.has(word)) {
                map.set(word, map.get(word) + 1)
            } else {
                map.set(word, 1);
            }
        }
    }
    let sorted = Array.from(map.keys()).sort((a,b) => a.localeCompare(b));
    for (let key of sorted) {
        console.log("'" + key + "'" + ' -> ' + map.get(key) + ' times');
    }
}

countWordsWithMaps(['Far too slow, you\'re far too slow.']);