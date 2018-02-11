function usernames(usernames) {
    let users = new Set();
    usernames.forEach(name => users.add(name));
    Array.from(users).sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        }
        return result;
    }).forEach(name => console.log(name));
}

usernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']);