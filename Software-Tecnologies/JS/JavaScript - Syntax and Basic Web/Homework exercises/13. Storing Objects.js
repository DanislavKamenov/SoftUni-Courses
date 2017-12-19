function storingObjects(arr) {
    let students = [];
    for (let input of arr) {
        let studentData = input.split(' -> ');
        let name = studentData[0];
        let age = studentData[1];
        let grade = studentData[2];
        students.push({name: name, age: age, grade: grade});
    }
    for (let student of students) {
        console.log('Name: ' + student.name);
        console.log('Age: ' + student.age);
        console.log('Grade: ' + student.grade);
    }
}
storingObjects(
    [
        'Pesho -> 13 -> 6.00',
        'Ivan -> 12 -> 5.57',
        'Toni -> 13 -> 4.90'
    ]);