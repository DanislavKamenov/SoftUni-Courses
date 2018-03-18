function extendObject() {
    return {
        extend: function (obj) {
            for (let prop in obj) {
                if (typeof obj[prop] === 'function') {
                    Object.getPrototypeOf(this)[prop] = obj[prop];
                } else {
                    this[prop] = obj[prop];
                }
            }
        }};

}
let myObj = extendObject();
myObj.extend({
    extensionMethod: function () {return 'hi'},
    extensionProperty: 'someString'
});
console.log(myObj);
