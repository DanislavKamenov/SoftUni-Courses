function formFiller(username, mail, number, form) {
    let usernamaPattern = /<![A-Za-z]+!>/gm;
    let mailPattern = /<@[A-Za-z]+@>/gm;
    let numberPattern = /<\+[A-Za-z]+\+>/gm;

    for (let line of form) {
        line = line.replace(usernamaPattern, username);
        line = line.replace(mailPattern, mail);
        line = line.replace(numberPattern, number);
        console.log(line);
    }
}

formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);