let expect = require("chai").expect;
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven Tests', function () {
    it('Pass a number (should return undefined)', function () {
        expect(isOddOrEven(23)).to.equal(undefined);
    });
    it('Pass valid input (should return odd)', function () {
        expect(isOddOrEven('2')).to.equal('odd');
    });
    it('Pass valid input (should return even)', function () {
        expect(isOddOrEven('22')).to.equal('even');
    });
});