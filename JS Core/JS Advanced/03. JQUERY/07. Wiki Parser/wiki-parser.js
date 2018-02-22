function wikiParser(selector) {
    let inputDiv = $(selector);
    let doubleQuotePattern = /'''([^']+?)'''(?=[ |"])/gm;
    let quotePattern = /''([^']+?)''/gm;
    let threeEqPattern = /===([^=]+?)===/gm;
    let twoEqPattern = /==([^=]+?)==/gm;
    let eqPattern = /=([^=]+?)=/gm;
    let linkAndLabelPattern = /\[\[([^[\]]+?)\|([^[\]]+?)]]/gm;
    let linkPattern = /\[\[([^[\]]+?)]]/gm;
    let text = inputDiv.text();

    text = text.replace(doubleQuotePattern, '<b>$1</b>');
    text = text.replace(quotePattern, '<i>$1</i>');
    text = text.replace(threeEqPattern, '<h3>$1</h3>')
        .replace(twoEqPattern, '<h2>$1</h2>')
        .replace(eqPattern, '<h1>$1</h1>')
        .replace(linkAndLabelPattern, '<a href="/wiki/$1">$2</a>')
        .replace(linkPattern, '<a href="/wiki/$1">$1</a>');

    inputDiv.html(text);

    console.log(text);
}