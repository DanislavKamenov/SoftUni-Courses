function multiplicationTable(n) {
    let output = `<table border="1">\n`;
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            output += '<tr><th>';
            output += 'x</th>'
        }
        output += `<th>${i}</th>`;
    }

    output += '</tr>\n';

    for (let row = 1; row <= n; row++) {
        output += `<tr><th>${row}</th>`;
        for (let col = 1; col <= n; col++) {
            output += `<td>${row * col}</td>`;

        }
        output += '</tr>\n';
    }
    output += '</table>';

    return output;
}

console.log(multiplicationTable(5));