function formatHelper(text) {
    text = text.toString();
    let addSpacePattern = /([.,!?:;])\s*/g;
    let removeSpacePattern = /\s+(?=[.,!?:;])/g;
    let dotPattern = /(\.)\s*(\.)\s*(\.)\s*(!)/g;
    let numsPattern = /\.\s*([0-9]+)/g;
    let quotesPattern = /"\s*(.*?)\s*"/g;
    text = text.replace(addSpacePattern, '$1 ');
    text = text.replace(removeSpacePattern, '');
    text = text.replace(dotPattern, '...!');
    text = text.replace(numsPattern, '.$1');
    text = text.replace(quotesPattern, '"$1"');
    console.log(text);
}

formatHelper(['Make,sure to give:proper spacing where is needed         .  .    . ! ']);