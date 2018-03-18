function collection() {
    let list = [];

    function ascendingSort(param) {
        list.sort((a, b) => a - b);
        return param;
    }

    function add(element) {
        this.size++;
        return ascendingSort(list.push(element));
    }

    function remove(index) {
        if (list[index] !== undefined) {
            this.size--;
            return ascendingSort(list.splice(index, 1));
        }
        //error
    }

    function get(index) {
        if (list[index] !== undefined) {
            return list[index];
        }
        //error
    }

    function show() {
        return console.log(list);
    }

    return {add, remove, get, show, size: 0}

}

let myList = collection();
for (let i = 0; i < 10; i++) {
    myList.add(i);
}
myList.remove(9);
myList.remove(5);
console.log(myList.size);
myList.remove(0);
