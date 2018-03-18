let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined', function () {
            expect(mathEnforcer.addFive('string')).to.equal(undefined);
        });
        it('should return input + 5', function () {
            expect(mathEnforcer.addFive(7)).to.equal(12);
        });
        it('should return input + 5, float', function () {
            expect(mathEnforcer.addFive(7.2464)).closeTo(12.2464, 0.01);
        });
        it('should return input + 5(negative input)', function () {
            expect(mathEnforcer.addFive(-8)).to.equal(-3);
        });
    });
    describe('subtractTen', function () {
        it('should return undefined', function () {
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });
        it('should return input - 10', function () {
            expect(mathEnforcer.subtractTen(17)).to.equal(7);
        });
        it('should return input - 10, float', function () {
            expect(mathEnforcer.subtractTen(18.55436)).closeTo(8.55436, 0.01);
        });
        it('should return input - 10(negative input), float', function () {
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
        });
    });
    describe('sum', function () {
        it('should return undefined', function () {
            expect(mathEnforcer.sum(-5)).to.equal(undefined);
        });
        it('should return input valid sum integer', function () {
            expect(mathEnforcer.sum(12, 3)).to.equal(15);
        });
        it('should return input valid sum two floats', function () {
            expect(mathEnforcer.sum(7.64, 3.3333)).closeTo(10.97, 0.01);
        });
        it('should return input valid sum two negative nums', function () {
            expect(mathEnforcer.sum(-5, -3)).to.equal(-8);
        });
        it('should return input valid sum int plus float', function () {
            expect(mathEnforcer.sum(7, 3.14)).closeTo(10.14, 0.01);
        });
        it('should return input valid sum one positive one negative', function () {
            expect(mathEnforcer.sum(5, -3)).to.equal(2);
        });
        it('invalid first, valid second', function () {
            expect(mathEnforcer.sum(null, 5)).to.equal(undefined);
        });
    });
});
