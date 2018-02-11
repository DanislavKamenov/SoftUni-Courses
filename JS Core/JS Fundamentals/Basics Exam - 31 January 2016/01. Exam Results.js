function examResults(arr) {
    arr = arr.filter(x => x !== '');
    let requestedExamAvg = arr.pop().trim();
    let totalExamPts = 0;
    let studentCount = 0;

    for (let studentData of arr) {
        let [student, course, examPts, bonusPts] = studentData.split(' ').filter(x => x !== '');
        if (examPts < 100) {
            console.log(`${student} failed at "${course}"`);
        } else {
            let coursePts = Number(examPts) / 100 * 20 + Number(bonusPts);
            let grade = coursePts > 80 ? 6.00 : ((coursePts / 80) * 4) + 2;
            console.log(`${student}: Exam - "${course}"; Points - ${parseFloat(coursePts.toFixed(2))}; Grade - ${grade.toFixed(2)}`);
        }
        if (course === requestedExamAvg) {
            totalExamPts += Number(examPts);
            studentCount++;
        }
    }
    if (totalExamPts === 0) {
        console.log(`"${requestedExamAvg}" average points -> ${0}`);
    } else {
        console.log(`"${requestedExamAvg}" average points -> ${parseFloat((totalExamPts / studentCount).toFixed(2))}`);
    }
}
    let arr = [ 'Pesho C#-Advanced 100 3',
        'Gosho Java-Basics 157 3',
        'Tosho HTML&CSS 317 12',
        'Minka C#-Advanced 57 15',
        'Stanka C#-Advanced 157 15',
        'Kircho C#-Advanced 300 0',
        'Niki C#-Advanced 400 10',
        'Denkata\'s super hard exam',
        '' ];
let arr2 = ['   EDUU    JS-Basics                317          15       ',
    'RoYaL        HTML5        121         10      ',
    'ApovBerger      OOP   0    10     ',
    'Stamat OOP   190 10',
    'MINKA OOP   230 10',
    '    OOP']


examResults(arr2);