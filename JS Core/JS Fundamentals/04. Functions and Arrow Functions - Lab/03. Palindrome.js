function palindrome(string) {
    let leftSide = true;
    let rightSide = true;

    return string.split('').reverse().join('') === string;
    }

console.log(palindrome('racecar'));