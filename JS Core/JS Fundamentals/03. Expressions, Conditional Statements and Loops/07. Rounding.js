function rounding(input) {
    let num = input[0];
    let rounding = input[1];

    if (rounding > 15) {
        rounding = 15;
    }
    console.log(Number(num.toFixed(rounding)));
}

rounding([10.5, 3]);