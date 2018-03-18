const jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('shared object', function () {
    describe('default state', function () {
        it('name state', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('incomre state', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('changeName', function () {
        it('empty string', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('valid string', function () {
            sharedObject.changeName('myName');
            expect(sharedObject.name).to.equal('myName');
            expect($('#name').val()).to.equal('myName');
        });
        it('check if value is remembered', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('myName');
            expect($('#name').val()).to.equal('myName');
        });
        it('Pass empty string with preexisting value (should not change)', function () {
            sharedObject.name = 'Nakov';
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('Nakov', 'Name should not change');
        });
    });
    describe('changeIncome', function () {
        it('string', function () {
            sharedObject.changeIncome('One');
            expect(sharedObject.income).to.be.null;
        });
        it('non Integer', function () {
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.null;
        });
        it('negative Integer', function () {
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.null;
        });
        it('valid Integer', function () {
            sharedObject.changeIncome(8);
            expect(sharedObject.income).to.equal(8);
            expect($('#income').val()).to.equal('8');
        });
        it('check if value is remembered', function () {
            sharedObject.changeIncome('asdsa');
            expect(sharedObject.income).to.be.equal(8);
            expect($('#income').val()).to.be.equal('8');
        });
        it('Pass object inside with predefined value should not change income', function () {
            sharedObject.income = 22;
            sharedObject.changeIncome({});
            expect(sharedObject.income).to.be.equal(22);
        });
        it('Pass zero should not change income', function () {
            sharedObject.changeIncome(33);
            let incomeTxt = $('#income');
            sharedObject.changeIncome(0);
            expect(incomeTxt.val()).to.be.equal('33');
        });
    });
    describe('updateName', function () {
        it('empty text box', function () {
            sharedObject.name = 'someName';
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('someName');
        });
        it('valid textBox', function () {
            sharedObject.name = 'lostName';
            $('#name').val('myNewName');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('myNewName');
        });
        it('check if value is remembered', function () {
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('myNewName');
            expect($('#name').val()).to.equal('myNewName');
        });
    });
    describe('updateIncome', function () {
        it('string', function () {
            $('#income').val('str');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(33);
        });
        it('empty textbox', function () {
            $('#income').val();
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(33);
        });
        it('non Integer', function () {
            $('#income').val('3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(33);
        });
        it('negative Integer', function () {
            $('#income').val('-3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(33);
        });
        it('valid Integer', function () {
            $('#income').val('13');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(13);
        });
        it('check if value is remembered', function () {
            sharedObject.updateIncome('');
            expect(sharedObject.income).to.be.equal(13);
            expect($('#income').val()).to.be.equal('13');
        });
        it('Pass zero (should not change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11);
        });
    });
});
