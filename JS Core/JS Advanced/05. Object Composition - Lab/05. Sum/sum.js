function solution() {
    let elem1, elem2, result;
    return {
        init: (selector1, selector2, resultSelector) => {
            elem1 = document.getElementById(selector1.substr(1));
            elem2 = document.getElementById(selector2.substr(1));
            result = document.getElementById(resultSelector.substr(1));
        },
        add: () => result.value = Number(elem1.value) + Number(elem2.value),
        subtract: () => result.value = Number(elem1.value) - Number(elem2.value)
    }
}
let obj = solution();

function sum() {
    obj.init('#num1', '#num2', '#result');
    obj.add();
}

function sub() {
    obj.init('#num1', '#num2', '#result');
    obj.subtract();
}