function JSONToHTMLTable(stringArr) {
    let studentData = JSON.parse(stringArr);
    let html = '<table>\n';
    html += '   <tr>';
    let keys = Object.keys(studentData[0]);

    for (let key of keys) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';

    for (let student of studentData) {
        html += '   <tr>';
        for (let prop in student) {
            html += `<td>${htmlEscape(student[prop])}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        text = text.toString();
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

JSONToHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');