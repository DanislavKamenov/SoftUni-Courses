function notation(input) {
    let nums = [];
    for (let element of input) {
        if (typeof(element) === "string") {
            let operator = element;
            if (nums.length >= 2) {
                let operationResult = nums.splice(nums.length - 2).reduce((a, b) => eval(`${a}${operator}${b}`));
                nums.push(operationResult);
            } else {
                console.log('Error: not enough operands!');
                return;
            }
        } else {
            nums.push(element);
        }
    }
    if (nums.length === 1) {
        console.log(nums.pop());
    } else {
        console.log('Error: too many operands!');
    }
}

notation([5, 5, '*']
);