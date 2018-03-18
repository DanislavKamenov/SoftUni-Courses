let expect = require("chai").expect;
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe("areSymmetric", function() {
    it("true", function() {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.equal(true);
    });
    it("false", function() {
        expect(isSymmetric([2, 3])).to.be.equal(false);
    });
    it("true", function() {
        expect(isSymmetric([true, 1])).to.be.equal(false);
    });
    it("false", function() {
        expect(isSymmetric('not an arr')).to.be.equal(false);
    });
    it("false", function() {
        expect(isSymmetric({})).to.be.equal(false);
    });
});