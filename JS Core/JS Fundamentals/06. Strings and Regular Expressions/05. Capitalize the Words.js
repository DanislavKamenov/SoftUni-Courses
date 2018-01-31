function capitalizeWords(string) {
    let regex = /(\b[A-Za-z])([A-Za-z]+)/g;

    console.log(string.replace(regex, (match, letter, word) => letter.toUpperCase() + word.toLowerCase()));
}

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');