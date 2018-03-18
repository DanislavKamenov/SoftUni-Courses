let expect = require("chai").expect;
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookup char by index', function () {
    it('first valid, second invalid', function () {
        let result = lookupChar('pesho', {idx: 20});
        expect(result).to.equal(undefined);
    });
    it('first invalid, second valid', function () {
        let result = lookupChar(3432423, 5);
        expect(result).to.equal(undefined);
    });
    it('first valid, second float', function () {
        let result = lookupChar('hello kitty', Math.PI);
        expect(result).to.equal(undefined);
    });
    it('valid params, idx out of range +', function () {
        let result = lookupChar('this is a string', 20);
        expect(result).to.equal('Incorrect index');
    });
    it('valid params, idx out of range -', function () {
        let result = lookupChar('this is a string', -8);
        expect(result).to.equal('Incorrect index');
    });
    it('valid params', function () {
        let result = lookupChar('this is a string', 5);
        expect(result).to.equal('i');
    });
});