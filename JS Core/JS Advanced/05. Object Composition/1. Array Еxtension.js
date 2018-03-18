(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n, l = this.length; i < l; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.sum = function () {
        let result = 0;
        for (let i = 0, l = this.length; i < l; i++) {
            result += this[i];
        }
        return result;
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();

let arr= [1,2,3,4,5];
console.log(arr.skip(3));