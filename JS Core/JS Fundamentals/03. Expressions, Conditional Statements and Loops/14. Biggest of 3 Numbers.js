function biggestOf3(nums) {
    let num1 = nums[0];
    let num2 = nums[1];
    let num3 = nums[2];

    return Math.max(num1, num2, num3);
}

console.log(biggestOf3([5, -2, 7]));