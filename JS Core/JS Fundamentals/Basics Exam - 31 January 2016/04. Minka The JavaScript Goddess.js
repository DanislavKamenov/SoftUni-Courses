function taskSort(arr) {
    let homework = {};
    for (let task of arr) {
        let [name, type, taskNum, score, linesCount] = task.split(' & ');
        taskNum = `Task ${taskNum}`;
        if (!homework.hasOwnProperty(taskNum)) {
            homework[taskNum] = {'tasks': [{'name': name, 'type': type}],
                                'average': Number(score),
                                'lines': Number(linesCount)
            };

        } else {
            homework[taskNum]['tasks'].push({'name': name, 'type': type});
            homework[taskNum]['average'] += Number(score);
            homework[taskNum]['lines'] += Number(linesCount);
        }
    }
    for (let task in homework) {
        homework[task]['average'] /= homework[task]['tasks'].length;
        homework[task]['average'] = parseFloat(homework[task]['average'].toFixed(2));
        homework[task]['tasks'].sort((a, b) => a['name'].localeCompare(b['name']));
    }
    let sortedHomework = Object.keys(homework).sort((a, b) => {
        if (homework[b]['average'] - homework[a]['average'] === 0) {
            return homework[a]['lines'] - homework[b]['lines'];
        }
        return homework[b]['average'] - homework[a]['average'];
    });
    let jsonString ='{';
    for (let task of sortedHomework) {
        jsonString +=`"Task ${task}":${JSON.stringify(homework[task])},`;
    }
    jsonString = jsonString.replace(/,$/, '}');
    //var sortedObject = {};
    //sortedHomework.forEach(function (el) {
    //    sortedObject[el] = homework[el];
    //});
    console.log(JSON.stringify(jsonString));
}
let test = [ 'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81' ];

taskSort(test);