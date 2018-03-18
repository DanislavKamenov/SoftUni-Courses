class sortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    ascendingSort(param) {
        this.list.sort((a, b) => a - b);
        return param;
    }

    add(element) {
        this.size++;
        return this.ascendingSort(this.list.push(element));
    }

    remove(index) {
        if (this.list[index] !== undefined) {
            this.size--;
            return this.ascendingSort(this.list.splice(index, 1));
        }
        //error
    }

    get(index) {
        if (this.list[index] !== undefined) {
            return this.list[index];
        }
        //error
    }

    show() {
        return console.log(this.list);
    }
}

let myList = new sortedList();
myList.add(5);
myList.get(0);
myList.add(3);
myList.get(0);
myList.remove(0);