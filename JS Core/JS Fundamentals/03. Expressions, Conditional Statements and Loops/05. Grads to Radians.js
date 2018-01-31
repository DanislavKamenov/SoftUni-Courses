function gradsToRads(grads) {
    grads %=  400;
    let rads = grads * 0.9;
    let degreeOutput = rads < 0 ? 360 + rads : rads;

    return degreeOutput;
}

console.log(gradsToRads(-50));