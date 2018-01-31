function templateFormat(questionData) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;
    for (let i = 0; i < questionData.length; i += 2) {
        xml += `  <question>\n    ${questionData[i]}\n  </question>\n  <answer>\n    ${questionData[i + 1]}\n  </answer>\n`;
    }
    xml += '</quiz>';

    return xml;
}

console.log(templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"
]));