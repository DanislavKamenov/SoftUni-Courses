function emoplyeeData(input) {
    let regex =
        /([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)/gm;
    let match = regex.exec(input);

    while (match) {
        console.log(`Name: ${match[1]}\n` +
            `Position: ${match[3]}\n` +
            `Salary: ${match[2]} `);
        match = regex.exec(input)
    }
}


emoplyeeData(['Isacc - 1000 - CEO',
'Ivan - 500 - Employee',
'Peter - 500 - Employee']);