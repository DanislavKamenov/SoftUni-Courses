function xmlMessenger(input) {
    let msgPattern = /^<message(?:\s*[a-z]+="[A-Za-z0-9 .]+"\s*)+>([\n\w\W]+)<\/message>$/;
    let attPattern = /\s*([a-z]+)="([A-Za-z0-9 .]+)"\s*/g;
    let match = msgPattern.exec(input);

    let sender, recipient;
    if (!match) {
        return 'Invalid message format'
    } else {
        let attMatch = attPattern.exec(input);
        while (attMatch) {
            if (attMatch[1] === 'to') recipient = attMatch[2];
            else if (attMatch[1] === 'from') sender = attMatch[2];
            attMatch = attPattern.exec(input);
        }
        if (sender === undefined || recipient === undefined) return 'Missing attributes'
    }
    let messageLines = match[1].split('\n');
    let html = `<article>
  <div>From: <span class="sender">${sender}</span></div>
  <div>To: <span class="recipient">${recipient}</span></div>
  <div>\n`;
    for (let line of messageLines) {
        html += `    <p>${line}</p>\n`;
    }
    return html += '  </div>\n</article>';
}

let str = '<message to="Pesho" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>';
let str2 = '<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\nLet\'s go out for a beer</message>';
let str3 = '<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>';

console.log(xmlMessenger(str3));