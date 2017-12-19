function objectToJSONString([a, b, c, d, e, f]) {
    let name = a.split(' -> ');
    let surname = b.split(' -> ');
    let age = c.split(' -> ');
    let grade = d.split(' -> ');
    let date = e.split(' -> ');
    let town = f.split(' -> ');
    let person =
        {
            name: name[1],
            surname: surname[1],
            age: Number(age[1]),
            grade: Number(grade[1]),
            date: date[1],
            town: town[1]
        };
    return JSON.stringify(person);
}

console.log(objectToJSONString(
    [
        'name -> Angel',
        'surname -> Georgiev',
        'age -> 20',
        'grade -> 6.00',
        'date -> 23/05/1995',
        'town -> Sofia'
    ]));