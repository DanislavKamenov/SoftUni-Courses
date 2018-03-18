let expect = require("chai").expect;
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("rgbToHex", function() {
    it("black", function() {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it("undefined", function() {
        expect(rgbToHexColor(-5, 0, 0)).to.be.equal(undefined);
    });
    it("undefined", function() {
        expect(rgbToHexColor(300, 0, 0)).to.be.equal(undefined);
    });
    it("white", function() {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it("undefined", function() {
        expect(rgbToHexColor(20, -78, 50)).to.be.equal(undefined);
    });
    it("undefined", function() {
        expect(rgbToHexColor(20, 58, -20)).to.be.equal(undefined);
    });
});

