let expect = require('chai').expect;
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('creacteCalculator', function () {
   describe('return value tests', function () {
       it('is return value === object', function () {
           expect(typeof createCalculator()).to.equal('object');
       });
       it('do properties exist', function () {
           expect(createCalculator().hasOwnProperty('value')).to.equal(false, 'hidden property value is exposed');
           expect(createCalculator().hasOwnProperty('add')).to.equal(true, 'missing property add');
           expect(createCalculator().hasOwnProperty('subtract')).to.equal(true, 'missing property subtract');
           expect(createCalculator().hasOwnProperty('get')).to.equal(true, 'missing property get');
       });

   });
    describe('add', function () {
        it('add invalid params', function () {
            let calc = createCalculator();
            calc.add({});
            expect(calc.get()).to.be.NaN;
            calc.add('five');
            expect(calc.get()).to.be.NaN;
        });
        it('add valid params', function () {
            let calc = createCalculator();
            calc.add(5);
            expect(calc.get()).to.equal(5);
            calc.add('3');
            expect(calc.get()).to.equal(8);
            calc.add(-2);
            expect(calc.get()).to.equal(6);
            calc.add(5.5);
            expect(calc.get()).to.equal(11.5);
        });
    })
    describe('add', function () {
        it('add invalid params', function () {
            let calc = createCalculator();
            calc.subtract({});
            expect(calc.get()).to.be.NaN;
            calc.subtract('five');
            expect(calc.get()).to.be.NaN;
        });
        it('add valid params', function () {
            let calc = createCalculator();
            calc.subtract(5);
            expect(calc.get()).to.equal(-5);
            calc.subtract('3');
            expect(calc.get()).to.equal(-8);
            calc.subtract(-2);
            expect(calc.get()).to.equal(-6);
            calc.subtract(5.5);
            expect(calc.get()).to.equal(-11.5);
        });
    })
});