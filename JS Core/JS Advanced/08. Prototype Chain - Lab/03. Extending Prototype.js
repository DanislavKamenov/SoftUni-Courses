function extendClass(inputClass) {
    inputClass.prototype.species = 'Human';
    inputClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
    return inputClass
}

extendClass(class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
})