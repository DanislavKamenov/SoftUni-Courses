function captialWords(arr) {
    let text = arr.join(",");
    let words = text.split(/\W+/);
    let nonEmptyWords = words.filter(w => w.length > 0);
    let upWords = nonEmptyWords.filter(isUppercase);
    console.log(upWords.join(", "));
    function isUppercase(str) {
        return str === str.toUpperCase();
    }
}
captialWords(['We start by HTML, CSS, JavaScript, JSON and REST.',
        'Later we touch some PHP, MySQL and SQL.',
        'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
        'Finally, we touch some Java, Hibernate and Spring.MVC.']);