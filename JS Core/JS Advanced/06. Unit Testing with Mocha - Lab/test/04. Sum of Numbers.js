let expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe("sum(arr)", function() {
    it("should return sum", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return sum", function() {
        expect(sum([-2])).to.be.equal(-2);
    });
    it("should return sum", function() {
        expect(sum([])).to.be.equal(0);
    });
});
