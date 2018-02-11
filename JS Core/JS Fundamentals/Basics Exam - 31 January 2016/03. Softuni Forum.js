function softuniForum(forumData) {
    let banlist = forumData.pop().split(' ');
    let usernamePattern = /#\b([A-Za-z][A-Za-z0-9-_]+[A-Za-z0-9])\b/g;
    let codePattern = /<code>[\n\w\W\d]*?<\/code>/g;
    forumData = forumData.join('\n');
    let codeMatch = forumData.match(codePattern);
    if (codeMatch) {
        for (let code of codeMatch) {
            let replacement = code.replace(new RegExp('#', 'g'), '@');
            forumData = forumData.replace(code, replacement);
        }
    }
    forumData = replacer(forumData);
    forumData = forumData.replace(new RegExp('@', 'g'), '#');
    console.log(forumData);

    function replacer(text) {
        let match = text.match(usernamePattern);
        if (match) {
            for (let name of match) {
                let username = name.substr(1);
                if (banlist.includes(username)) {
                    text = text.replace(name, '*'.repeat(username.length));
                } else {
                    text = text.replace(name, `<a href="/users/profile/show/${username}">${username}</a>`)
                }
            }
        }
        return text;
    }
}

let test1 = [ '#RoYaL: <code> this code ain\'t #RoYal</code> but this is #RoYaL ',
    'but I am confident that I\'ve written',
    'everything correctly. Ask #iordan_93, #RoYal, #gosho',
    'and #pesho if you don\'t believe me',
    '<code>',
    '#trying to print stuff',
    '#YoloSwagins',
    '#Royal is trying to break my code and #pesho is helping',
    '#gosho is just watching',
    'print("yoo")',
    '</code> #gosho, #Denkata-',
    'more strings, no users here',
    'pesho gosho royal' ];
let test2 = ['<code>',
'#lele',
'#pochna se </code>',
'<code> #mani_begai #gosho <code>',
'gosho'];
softuniForum(test1);