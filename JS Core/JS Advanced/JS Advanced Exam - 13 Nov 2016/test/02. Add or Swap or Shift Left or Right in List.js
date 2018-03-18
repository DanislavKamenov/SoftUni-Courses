const expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}


describe('createList', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });
    describe('init tests', function () {
        it('should init with all props', function () {
            expect(list.hasOwnProperty('add')).to.be.true;
            expect(list.hasOwnProperty('shiftLeft')).to.be.true;
            expect(list.hasOwnProperty('shiftRight')).to.be.true;
            expect(list.hasOwnProperty('swap')).to.be.true;
            expect(list.hasOwnProperty('toString')).to.be.true;
        });
    });
    describe('add', function () {
        it('add mixed', function () {
            list.add(5);
            list.add('three');
            list.add(false);
            list.add({});
            expect(list.toString()).to.equal('5, three, false, [object Object]')
        });
    });
    describe('shiftLeft', function () {
        it('shiftLeft', function () {
            list.add(0);
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.shiftLeft();

            expect(list.toString()).to.equal('1, 2, 3, 4, 0');
        });
        it('shiftLeft 1', function () {
            list.add('one');
            list.shiftLeft();
            expect(list.toString()).to.equal('one');
        });
        it('shiftLeft 0', function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('');
        });
    });
    describe('shiftRight', function () {
        it('shiftRight', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.add('four');
            list.add('five');
            list.shiftRight();

            expect(list.toString()).to.equal('five, one, two, three, four');
        });
        it('shiftRight 1', function () {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('5');
        });
        it('shiftRight 0', function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('');
        });
    });
    describe('swap', function () {
        it('swap first idx doesnt exist', function () {
            list.add(1);
            list.add('two');
            list.add(3);
            list.add('four');
            list.add(5);
            expect(list.swap(-5, 2)).to.be.false;

            expect(list.toString()).to.equal('1, two, 3, four, 5');
        });
        it('swap equal', function () {
            list.add(1);
            list.add(4);
            list.add(6);
            list.add(2);
            expect(list.swap(2, 2)).to.be.false;
            expect(list.toString()).to.equal('1, 4, 6, 2');
        });
        it('swap obj first', function () {
            list.add(1);
            list.add(4);
            list.add(6);
            list.add(2);
            expect(list.swap({}, 2)).to.be.false;
            expect(list.toString()).to.equal('1, 4, 6, 2');
        });
        it('swap first idx at arr length', function () {
            list.add(1);
            list.add(4);
            list.add(6);
            list.add(2);
            expect(list.swap(4, 1)).to.be.false;
            expect(list.toString()).to.equal('1, 4, 6, 2');
        });
        it('swap second idx at arr length', function () {
            list.add(1);
            list.add(4);
            list.add(6);
            list.add(2);
            expect(list.swap(3, 4)).to.be.false;
            expect(list.toString()).to.equal('1, 4, 6, 2');
        });
        it('swap reversed', function () {
            list.add(1);
            list.add(4);
            list.add(6);
            list.add(2);
            expect(list.swap(3, 0)).to.be.true;
            expect(list.toString()).to.equal('2, 4, 6, 1');
        });
        it('swap valid idx', function () {
            list.add('five');
            list.add('six');
            list.add(true);
            list.add(false);
            list.swap(0, 2);
            expect(list.toString()).to.equal('true, six, five, false');
        });
    })
});