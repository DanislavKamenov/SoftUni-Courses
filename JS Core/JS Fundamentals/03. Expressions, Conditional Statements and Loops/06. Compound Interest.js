function compoundTest(input) {
    let principalSum = input[0];
    let interestPercent = input[1] / 100;
    let compoundPeriodMonths = input[2];
    let totalSpanYears = input[3];
    let frequency = 12 / compoundPeriodMonths;
    let power = frequency * totalSpanYears;

    let compoundInterest =  principalSum * (Math.pow((1 + (interestPercent / frequency)), power));

    console.log(compoundInterest.toFixed(2));
}

compoundTest([1500, 4.3, 3, 6]);