let closure = (function() {
    let arr = [];
    return function (input) {
        for (let str of input) {
            [cmd, value] = str.split(' ');
            let commands = {
                add: (item) => arr.push(item),
                remove: (item) => arr = arr.filter(el => el !== item),
                print: () => console.log(arr.join(','))
            };
            commands[cmd](value);
        }
    }
})();
closure(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);
