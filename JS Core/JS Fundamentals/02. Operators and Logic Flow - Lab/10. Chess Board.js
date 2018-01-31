function chessboard(n) {
    let html = '<div class="chessboard">\n';
    for (let i = 0; i < n; i++) {
        html += "<div>\n";
        let color = "white";
        if (i % 2 === 0) color = "black";
        for (let j = 0; j < n; j++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color === 'white') ? 'black' : 'white';
        }
        html += "</div>\n"
    }
    html += "</div>";
    return html
}

console.log(chessboard(2));