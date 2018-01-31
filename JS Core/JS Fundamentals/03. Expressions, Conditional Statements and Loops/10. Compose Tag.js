function composeTag(tag) {
    let fileName = tag[0];
    let altText = tag[1];
    let imgTag = `<img src="${fileName}" alt="${altText}">`;

    return imgTag;
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));