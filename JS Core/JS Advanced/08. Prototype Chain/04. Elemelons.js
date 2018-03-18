function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Can not instantiate directly.');
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
            this.element = this.constructor.name;
        }

        set element(name) {
            this._element = name.split('melon')[0];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {


            return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
            this.element = this.constructor.name;
        }

        set element(name) {
            this._element = name.split('melon')[0];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
            this.element = this.constructor.name;
        }

        set element(name) {
            this._element = name.split('melon')[0];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
           return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
            this.element = this.constructor.name;
        }

        set element(name) {
            this._element = name.split('melon')[0];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
           return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._element = 'Water';
        }

        morph() {
            let elements = ['Water', 'Fire', 'Earth', 'Air'];
            let idx = elements.indexOf(this._element) + 1;
            if (idx > elements. length) idx = 0;
            this._element = elements[idx];
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}

//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

