function cars(arr) {
    let cars = [];
    let cmdHandler = (function () {
        function create(name, parent) {
            if (parent) {
                cars[name] = Object.create(cars[parent]);
            } else {
                cars[name] = {};
            }
        }
        function set(name, value, key) {
            cars[name][key] = value;
        }

        function print(name) {
            let output = [];
            for (let model in cars[name]) {
                output.push(`${model}:${cars[name][model]}`);
            }
            console.log(output.join(', '));
        }
        return {create, set, print}
    })();
    for (let line of arr) {
        [cmd, name, prop, parent] = line.split(' ');
        cmdHandler[cmd](name, parent, prop)
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);