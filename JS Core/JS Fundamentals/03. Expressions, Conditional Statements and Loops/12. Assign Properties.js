function assignProps(obj) {
    let prop1 = obj[0];
    let val1 = obj[1];
    let prop2 = obj[2];
    let val2 = obj[3];
    let prop3 = obj[4];
    let val3 = obj[5];


    let person = {};
    person[prop1] = val1;
    person[prop2] = val2;
    person[prop3] = val3;

    return person;
}

console.log(assignProps(['name', 'Pesho', 'age', '23', 'gender', 'male']));;