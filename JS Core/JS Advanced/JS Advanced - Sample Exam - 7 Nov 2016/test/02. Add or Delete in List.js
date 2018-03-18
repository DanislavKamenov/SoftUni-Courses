let expect = require('chai').expect;

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();


describe('List', function () {
    let myList;
    beforeEach(function () {
        myList = Object.assign({}, list);
    });

    it('init with all props', function () {
        expect(myList.hasOwnProperty('add')).to.be.true;
        expect(myList.hasOwnProperty('delete')).to.be.true;
        expect(myList.hasOwnProperty('toString')).to.be.true;
    });
    it('add: nums', function () {
        myList.add(5);
        myList.add(2);
        myList.add(8);
        expect(myList.toString()).to.equal('5, 2, 8')
    });
    it('add: strings', function () {
        myList.add('seven');
        myList.add('eight');
        myList.add('nine');
        expect(myList.toString()).to.equal('seven, eight, nine')
    });
    it('add: objs', function () {
        myList.add({});
        myList.add([]);
        myList.add(() => {});
        expect(myList.toString()).to.equal('[object Object], , () => {}')
    });
    it('add: mixred', function () {
        myList.add(5);
        myList.add('seven');
        myList.add({});
        expect(myList.toString()).to.equal('5, seven, [object Object]')
    });
    it('delete: nan idx', function () {
        myList.add(5);
        myList.add(10);
        myList.add(20);
        myList.add(-50);
        myList.add(35);
        expect(myList.delete('pesho')).to.be.undefined;
        expect(myList.toString()).to.equal('5, 10, 20, -50, 35')
    });
    it('delete: idx too big', function () {
        myList.add(5);
        myList.add(10);
        myList.add(20);
        myList.add(-50);
        myList.add(35);
        expect(myList.delete(5)).to.be.undefined;
        expect(myList.toString()).to.equal('5, 10, 20, -50, 35')
    });
    it('delete: idx too small', function () {
        myList.add(7);
        myList.add(12);
        myList.add(23);
        myList.add(-20);
        myList.add(15);
        expect(myList.delete(-2)).to.be.undefined;
        expect(myList.toString()).to.equal('7, 12, 23, -20, 15')
    });
    it('delete: idx within bounds', function () {
        myList.add(7);
        myList.add(12);
        myList.add(23);
        myList.add(-20);
        myList.add(15);
        myList.delete(2);
        expect(myList.toString()).to.equal('7, 12, -20, 15')
    });
    it('toString: empty', function () {
        expect(myList.toString()).to.equal('')
    });
});