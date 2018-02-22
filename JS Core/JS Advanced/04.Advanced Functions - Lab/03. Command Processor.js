function result(commands) {
    let closure = (function () {
        let str = '';
        return{
            append: (s) => str += s,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str)
        };
    })();

    for (let st of commands) {
        let [comm, value] = st.split(' ');
        closure[comm](value);
    }
}

result(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);
result(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);
