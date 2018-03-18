const expect = require('chai').expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe('sortedList', function () {
    let myList;
    beforeEach(function () {
        myList = new SortedList();
    });
    describe('init tests', function () {
        it('should init as class', function () {
            expect(myList instanceof SortedList).to.be.true;
        });
        it('init with all props', function () {
            expect(myList.list).to.deep.equal([]);
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.true;
        });
    });
    describe('add', function () {
        it('should add nums and sort', function () {
            myList.add(3);
            myList.add(1);
            expect(myList.list).to.deep.equal([1, 3]);
            myList.add(8);
            myList.add(2);
            myList.add(12);
            myList.add(5);
            expect(myList.list).to.deep.equal([1, 2, 3, 5, 8, 12])
        });
    });
    describe('remove', function () {
        beforeEach(function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.add(5);
            myList.add(6);
        });
        it('should throw if negative idx', function () {
            expect(() => {myList.remove(-5)}).to.throw(Error)
        });
        it('should throw if idx too large', function () {
            expect(() => {myList.remove(240)}).to.throw(Error)
        });
        it('should throw if empty collection', function () {
            myList = new SortedList();
            expect(() => {myList.remove(0)}).to.throw(Error)
        });
        it('should work with valid idx', function () {
            myList.remove(0);
            myList.remove(3);
            expect(myList.list).to.deep.equal([2, 3 ,4, 6])
        });
    });
    describe('get', function () {
        beforeEach(function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.add(5);
            myList.add(6);
        });
        it('should throw if negative idx', function () {
            expect(() => {myList.get(-20)}).to.throw(Error)
        });
        it('should throw if idx too large', function () {
            expect(() => {myList.get(150)}).to.throw(Error)
        });
        it('should throw if empty collection', function () {
            myList = new SortedList();
            expect(() => {myList.get(0)}).to.throw(Error)
        });
        it('should work with valid idx', function () {
            expect(myList.get(2)).to.equal(3);
            expect(myList.get(5)).to.equal(6);
        });
    });
    describe('size', function () {
        it('should return 0 on empty collection', function () {
            expect(myList.size).to.equal(0);
        });
        it('should return num on valid collection', function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.add(5);
            myList.add(6);
            expect(myList.size).to.equal(6);
        });
    })
});