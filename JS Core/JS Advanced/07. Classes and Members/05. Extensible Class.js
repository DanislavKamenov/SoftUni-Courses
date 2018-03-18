let Extensible = (function() {
    let id = 0;
    return class {
        constructor() {
            this.id = id++;
        }
        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(this)[prop] = template[prop];
                }
                else {
                    this[prop] = template[prop];
                }
            }
        }
    }
})();

var template = {
    extensionData: 5,
    extensionMethod: function (value) {
        return value + 1;
    }
};

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
obj1.extend(template);
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

