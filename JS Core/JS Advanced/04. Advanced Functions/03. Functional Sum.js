(function functionalSum() {
    let sum = 0;
    function add(num) {
        sum += num;
        console.log(add.caller);
        return add;
    }
    add.toString = () => sum;
    return add;
})()(5);

//console.log(iife(5).printClosure());

