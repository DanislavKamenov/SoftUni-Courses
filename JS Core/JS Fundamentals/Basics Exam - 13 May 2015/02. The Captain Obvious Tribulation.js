function tribulation(arr) {
    let text = arr[0];
    let uniqueWords = new Set();
    let textIterate = text.replace(/[^\w0-9\s]+/g, '').split(/\s+/);
    for (let word of textIterate) {
        let wordPattern = new RegExp(`\\b${word}\\b`, 'gi');
        let match = text.match(wordPattern);
        if (match.length > 2) {
            uniqueWords.add(match[0].toLowerCase());
        }
    }
    if (uniqueWords.size === 0) {
        console.log('No words');
        return;
    }
    let sentences = arr[1].match(/.*?[.!?]/g).map(x => x.trim());
    let output = [];
    for (let sent of sentences) {
        let words = sent.split(/\s+/);
        let wordChecker = new Set(uniqueWords);
        let count = 0;
        for (let word of words) {
            if (wordChecker.has(word.replace(/[^\w0-9\s]+/g, '').toLowerCase())) {
                wordChecker.delete(word);
                count++;
                if (count === 2) {
                    output.push(sent);
                    break;
                }
            }
        }
    }
    if (output.length > 0) {
        output.forEach(x => console.log(x))
    } else {
        console.log('No sentences');
    }
}
let test1 = ["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."];
let test2 = ["Why",
    "There are no words that you should be matching. You should be careful."];

tribulation(test2);