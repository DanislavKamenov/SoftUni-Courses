let expect = require('chai').expect;

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}


describe('Sumator', function () {
    let sum;
    beforeEach('init obj', function () {
        sum = new Sumator();
    });
    it('instanceof Sumator', function () {
        expect(sum instanceof Sumator).to.be.true;
    });
    it('has all properties', function () {
        expect(sum.data).to.exist;
        expect(Sumator.prototype.add).to.exist;
        expect(Sumator.prototype.sumNums).to.exist;
        expect(Sumator.prototype.removeByFilter).to.exist;
        expect(Sumator.prototype.toString).to.exist;
    });
    it('data initialisation', function () {
        expect(sum.data).to.deep.equal([]);
    });
    it('add num', function () {
        sum.add(5);
        expect(sum.data).to.deep.equal([5]);
    });
    it('add string', function () {
        sum.add('hello');
        expect(sum.data).to.deep.equal(['hello']);
    });
    it('add obj', function () {
        sum.add({a: 'a'});
        expect(sum.data).to.deep.equal([{a: 'a'}]);
    });it('add multiple', function () {
        sum.add({a: 'a'});
        expect(sum.data).to.deep.equal([{a: 'a'}]);
    });
    it('sum empty', function () {
        sum.sumNums();
        expect(sum.sumNums()).to.equal(0);
    });
    it('sum one num', function () {
        sum.add(5);
        expect( sum.sumNums()).to.deep.equal(5);
    });
    it('sum one num', function () {
        sum.add(5);
        sum.add(10);
        sum.add(-5);
        sum.sumNums();
        expect(sum.sumNums()).to.deep.equal(10);
    });
    it('sum with double', function () {
        sum.add(5);
        sum.add(3.5);
        sum.add(2);
        sum.sumNums();
        expect(sum.sumNums()).to.deep.equal(10.5);
    });
    it('sum with nums and NaNs', function () {
        sum.add(5);
        sum.add('10');
        sum.add(-5);
        sum.add({five: 5});
        sum.add([]);
        sum.add(3.3);
        sum.sumNums();
        expect(sum.sumNums()).to.deep.equal(3.3);
    });
    it('remove all even nums', function () {
        sum.add(1);
        sum.add(2);
        sum.add(3);
        sum.add(4);
        sum.add(5);
        sum.add(6);
        sum.removeByFilter(x => x % 2 === 0);
        expect(sum.data).to.deep.equal([1, 3, 5]);
    });
    it('remove all objs', function () {
        sum.add({});
        sum.add(2);
        sum.add([]);
        sum.add(4);
        sum.add(5);
        sum.add(6);
        sum.add('Object');
        sum.removeByFilter(x => x instanceof Object);
        expect(sum.data).to.deep.equal([2, 4, 5, 6, 'Object']);
    });
    it('toString empty obj', function () {
        expect(sum.toString()).to.equal('(empty)');
    });
    it('toString nums', function () {
        sum.add(1);
        sum.add(2);
        sum.add(3);
        sum.add(4);
        sum.add(5);
        sum.add(6);
        expect(sum.toString()).to.equal('1, 2, 3, 4, 5, 6');
    });
    it('toString strings', function () {
        sum.add('one');
        sum.add('two');
        sum.add('three');
        expect(sum.toString()).to.equal('one, two, three');
    });
    it('toString nums, obj, strings', function () {
        sum.add(1);
        sum.add('two');
        sum.add({});
        sum.add(5);
        sum.add([]);
        expect(sum.toString()).to.equal('1, two, [object Object], 5, ');
    });
});