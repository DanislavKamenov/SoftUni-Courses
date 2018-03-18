(function extendString() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.valueOf();
    };
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.valueOf();
    };
    String.prototype.isEmpty = function () {
        return this.toString() === '';
    };
    String.prototype.truncate = function (n) {
        if (this.toString().length > n) {
            let elipsis = n < 4 ? '.'.repeat(n) : '...';
            if (this.valueOf().includes(' ')) {
                let strArr = this.slice(0, n).split(' ').filter(x => x !== '');
                strArr.pop();
                if (strArr.length > 1) strArr = strArr.join(' ');
                return strArr + elipsis;
            } else {
                let str = this.slice(0, this.valueOf().length - 4);
                return str + elipsis;
            }
        }
        return this.valueOf();
    };
    String.format = function (string, ...params) {
        for (let i = 0, l = params.length; i < l; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
