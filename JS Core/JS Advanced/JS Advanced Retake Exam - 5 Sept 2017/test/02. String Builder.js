let expect = require('chai').expect;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}
describe("StringBuilder", function() {
    describe('init testing', function () {
        it("is init as class", function() {
            let result = new StringBuilder();
            expect(result instanceof StringBuilder).to.be.true;
        });
        it('init without params', function () {
            let result = new StringBuilder();
            expect(result._stringArray).to.deep.equal([]);
            expect(result.toString()).to.equal('');
        });
        it('init with num', function () {
            expect(function () {
                new StringBuilder(5);
            }).to.throw('Argument must be string');
        });
        it('init with params', function () {
            let result = new StringBuilder('hello');
            expect(result._stringArray).to.deep.equal(['h', 'e', 'l', 'l', 'o']);
            expect(result.toString()).to.equal('hello');
        });
        it('has functions attached to prototype', function () {
            let builder = new StringBuilder();
            expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.equal(true, "Missing append function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.equal(true, "Missing prepend function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.equal(true, "Missing insertAt function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
        });
    });
    describe('append', function () {
        it('append without params', function () {
            let result = new StringBuilder('hello');
            expect(function () {
                result.append();
            }).to.throw('Argument must be string');
        });
        it('append with invalid params', function () {
            let result = new StringBuilder('hello');
            expect(function () {
                result.append({});
            }).to.throw('Argument must be string');
        });
        it('append with empty string', function () {
            let result = new StringBuilder('hello');
            result.append('');
            expect(result._stringArray).to.deep.equal(['h', 'e', 'l', 'l', 'o']);
            expect(result.toString()).to.equal('hello');
        });
        it('append with valid params', function () {
            let result = new StringBuilder('hello');
            result.append(' there');
            expect(result._stringArray).to.deep.equal(['h', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'e', 'r', 'e']);
            expect(result.toString()).to.equal('hello there');
        })
    });
    describe('prepend', function () {
        it('prepend without params', function () {
            let result = new StringBuilder('hello');
            expect(function () {
                result.prepend();
            }).to.throw('Argument must be string');
        });
        it('prepend with invalid params', function () {
            let result = new StringBuilder('hello');
            expect(function () {
                result.prepend([]);
            }).to.throw('Argument must be string');
        });
        it('prepend with empty string', function () {
            let result = new StringBuilder('hello');
            result.prepend('');
            expect(result._stringArray).to.deep.equal(['h', 'e', 'l', 'l', 'o']);
            expect(result.toString()).to.equal('hello');
        });
        it('prepend with valid params', function () {
            let result = new StringBuilder('hello');
            result.prepend('Dani ');
            expect(result._stringArray).to.deep.equal(['D', 'a', 'n', 'i', ' ', 'h', 'e', 'l', 'l', 'o']);
            expect(result.toString()).to.equal('Dani hello');
        })
    })
    describe('insertAt', function () {
        it('invalid first param', function () {
            let result = new StringBuilder('Hello world');
            expect(function () {
                result.insertAt(() =>{}, 5);
            }).to.throw('Argument must be string');
        });
        it('empty string param', function () {
            let result = new StringBuilder('Hello world');
            result.insertAt('', 5);
            expect(result._stringArray).to.deep.equal(['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
            expect(result.toString()).to.equal('Hello world');
        });
        it('valid string param', function () {
            let result = new StringBuilder('Hello world');
            result.insertAt('Qat', 5);
            expect(result._stringArray).to.deep.equal(['H', 'e', 'l', 'l', 'o', 'Q', 'a', 't', ' ', 'w', 'o', 'r', 'l', 'd']);
            expect(result.toString()).to.equal('HelloQat world');
        })
    })
    describe('remove', function () {
        it('0 length', function () {
            let result = new StringBuilder('Hello world');
            result.remove(1, 0);
            expect(result._stringArray).to.deep.equal(['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
            expect(result.toString()).to.equal('Hello world');
        });
        it('length greater than str length', function () {
            let result = new StringBuilder('Hello world');
            result.remove(5, 20);
            expect(result._stringArray).to.deep.equal(['H', 'e', 'l', 'l', 'o']);
            expect(result.toString()).to.equal('Hello');
        });
        it('valid params in range', function () {
            let result = new StringBuilder('Hello world');
            result.remove(6, 3);
            expect(result._stringArray).to.deep.equal(['H', 'e', 'l', 'l', 'o', ' ', 'l', 'd']);
            expect(result.toString()).to.equal('Hello ld');
        });
        it('negative length', function () {
            let result = new StringBuilder('Hello world');
            result.remove(6, -5);
            expect(result._stringArray).to.deep.equal(['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
            expect(result.toString()).to.equal('Hello world');
        })
    })
});

