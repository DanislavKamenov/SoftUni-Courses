function extractLinks(links) {
    let regex = /^\bwww\.[A-Za-z0-9-]+(\.[a-z]+)+$/gm;
    //let matches = [];
    links = links.join(' ');

    //for (let line of links) {
    //    if (regex.test(line)) {
    //        matches.push(line.match(regex))
    //    }
    //}

    console.log(regex.test(links) ? links.match(regex).join('\n') : '');
    //console.log(matches.join('\n'));
}