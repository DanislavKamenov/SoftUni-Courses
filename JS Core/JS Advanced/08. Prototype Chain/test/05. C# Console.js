let expect = require('chai').expect;

class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

describe('C# Console', function () {
    it('print string', function () {
        expect(Console.writeLine('Hello world')).to.equal('Hello world');
    });
    it('print obj', function () {
        let obj = {prop1: 'string', prop2: 54};
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj));
    });
    it('template, first param not a string', function () {
        expect(function () {
            Console.writeLine(5, 'a', 'b', 'c')
        }).to.throw(TypeError);
    });
    it('template, more placeholders than params', function () {
        expect(function () {
            Console.writeLine('{0} too {1} many {2} placeholders {3}', 'a', 'b', 'c')
        }).to.throw(RangeError);
    });
    it('template, bad placeholder indexes', function () {
        expect(() => {
            Console.writeLine('{0} too {1} many {20} placeholders', 'a', 'b', 'c')
        }).to.throw(RangeError);
    });
    it('template, correct params', function () {
        expect(Console.writeLine('{0} too {1} many {2} placeholders', 'a', 'b', 'c')).to.equal('a too b many c placeholders');
    });
});