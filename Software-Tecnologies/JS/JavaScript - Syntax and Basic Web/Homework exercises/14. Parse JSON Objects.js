function parseJSONObjects(arr) {
    "use strict";
    let jsonObjs = arr.map(JSON.parse);
    for (let obj of jsonObjs) {
        console.log('Name: ' + obj.name);
        console.log('Age: ' + obj.age);
        console.log('Date: ' + obj.date);
    }
}
parseJSONObjects(
    [
        '{"name":"Gosho","age":10,"date":"19/06/2005"}',
        '{"name":"Tosho","age":11,"date":"04/04/2005"}'

    ]
);