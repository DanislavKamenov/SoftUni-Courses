class Rat {
    constructor(name) {
        this.name = name;
        this.united = [];
    }

    unite(rat) {
        if (rat.constructor.name === 'Rat') {
            this.united.push(rat);
        }
    }

    getRats() {
        return this.united;
    }

    toString() {
        let str = this.constructor.name;
        for (let rat of this.united) {
            str += `\n##${rat.name}`;
        }
        return str;
    }
}


let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
