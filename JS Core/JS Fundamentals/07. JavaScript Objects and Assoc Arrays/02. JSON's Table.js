function table(employees) {
    let html = '<table>\n';
    for (let employeeData of employees) {
        let {name, position, salary} =JSON.parse(employeeData);
        html +='    <tr>\n';
        html += `        <td>${htmlEscape(name)}</td>\n`;
        html += `        <td>${htmlEscape(position)}</td>\n`;
        html += `        <td>${salary}</td>\n`;
        html+= '    <tr>\n'
    }
    html+= '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);