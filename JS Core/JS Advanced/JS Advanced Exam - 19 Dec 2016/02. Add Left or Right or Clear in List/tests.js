const makeList = require('./Add Left or Right or Clear in List');
const expect = require('chai').expect;


describe('makeList tests', function () {
    let list;
    beforeEach(function () {
        list = makeList();
    });
    it('has props', function () {
        expect(list.hasOwnProperty('addLeft')).to.be.true;
        expect(list.hasOwnProperty('addRight')).to.be.true;
        expect(list.hasOwnProperty('clear')).to.be.true;
        expect(list.hasOwnProperty('toString')).to.be.true;
        //expect(MakeList.prototype.hasOwnProperty('data')).to.be.true;
    });
    it('addLeft ints', function () {
        list.addLeft(5);
        list.addLeft(2);
        list.addLeft(3);
        expect(list.toString()).to.equal('3, 2, 5');
    });
    it('addLeft strings', function () {
        list.addLeft('one');
        list.addLeft('two');
        list.addLeft('three');
        expect(list.toString()).to.equal('three, two, one');
    });
    it('addLeft objs', function () {
        list.addLeft([]);
        list.addLeft({});
        list.addLeft(() => {});
        expect(list.toString()).to.equal('() => {}, [object Object], ');
    });
    it('addLeft mixed', function () {
        list.addLeft(1);
        list.addLeft('two');
        list.addLeft({});
        expect(list.toString()).to.equal('[object Object], two, 1');
    });
    it('addRight ints', function () {
        list.addRight(12);
        list.addRight(-2);
        list.addRight(5);
        expect(list.toString()).to.equal('12, -2, 5');
    });
    it('addRight strings', function () {
        list.addRight('four');
        list.addRight('keks');
        list.addRight('vsichko e tochno');
        expect(list.toString()).to.equal('four, keks, vsichko e tochno');
    });
    it('addRight objs', function () {
        list.addRight([]);
        list.addRight({});
        list.addRight(() => {});
        expect(list.toString()).to.equal(', [object Object], () => {}');
    });
    it('addRight mixed', function () {
        list.addRight(-3);
        list.addRight('rofl');
        list.addRight([]);
        expect(list.toString()).to.equal('-3, rofl, ');
    });
    it('clear on empty', function () {
        list.clear();
        expect(list.toString()).to.equal('');
    });
    it('clear on full', function () {
        list.addLeft(5);
        list.addRight(2);
        list.clear();
        expect(list.toString()).to.equal('');
    });
})