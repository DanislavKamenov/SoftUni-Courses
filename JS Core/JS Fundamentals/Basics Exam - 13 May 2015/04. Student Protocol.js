function studentProtocol(arr) {
    let dataObj = {};
    for (let exam of arr) {
        exam = exam.split(':').map(x => x.trim());
        let studentData = exam[0].split('-').map(x => x.trim());
        let score = exam[1];
        if (score >= 0 && score <= 400) {
            let name = studentData[0];
            let lang = studentData[1];
            if (!dataObj.hasOwnProperty(lang)) {
                dataObj[lang] = [{'name': name, 'result': Number(score), 'makeUpExams': 0}];
            } else {
                let registeredStudent = dataObj[lang].filter(x => x.name === name);
                if (registeredStudent.length > 0) {
                    dataObj[lang].filter(x => x.name === name)[0].result < score ? dataObj[lang].filter(x => x.name === name)[0].result = Number(score) :
                        Number(dataObj[lang].filter(x => x.name === name)[0].result);
                    dataObj[lang].filter(x => x.name === name)[0].makeUpExams++;
                } else {
                    dataObj[lang].push({'name': name, 'result': Number(score), 'makeUpExams': 0});
                }
            }
        }
    }
    for (let exam in dataObj) {
        dataObj[exam].sort((a, b) => {
            if (b.result - a.result === 0) {
                if (a.makeUpExams - b.makeUpExams === 0) {
                    return a.name.localeCompare(b.name)
                }
                return a.makeUpExams - b.makeUpExams;
            }
            return b.result - a.result;
        });
    }
    console.log(JSON.stringify(dataObj));
}
let test1 = [ 'Peter Jackson - Java : 350',
    'Jane - JavaScript : 200',
    'Jane     -    JavaScript :     400',
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Simon Cowell - PHP : 200' ];
let test2 = [ 'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Peter Jackson - PHP: 350',
    'Simon Cowell - PHP : 400' ];
studentProtocol(test2);