function extractUniqueWords(text) {
    let uniqueWords = new Set();
    text.join(' ').split(/\W+/).filter(x => x !== '').map(word => word.toLowerCase()).forEach(uniqueWord => uniqueWords.add(uniqueWord));
    let output = Array.from(uniqueWords).join(', ');
    console.log(output);
}

extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
);