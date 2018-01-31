function filterByAge(minAge, firstName, firstAge, secondName, secondAge) {
    let personOne = {name: firstName, age: firstAge};
    let personTwo = {name: secondName, age: secondAge};

    if (personOne.age >= minAge) {
        console.log(personOne);
    }
    if (personTwo.age >= minAge) {
        console.log(personTwo);
    }
}

filterByAge(19, 'Pesho', 119, 'Gosho', 20);