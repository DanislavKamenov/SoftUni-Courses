function scoreToHTML(input) {
    let personData = JSON.parse(input);
    let html = '<table>\n';
    let keys = Object.keys(personData[0]);
    html += `<tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;

    for (let person of personData) {
        html += `    <tr><td>${htmlEscape(person[keys[0]])}</td><td>${person[keys[1]]}</td></tr>\n`;
    }
    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')