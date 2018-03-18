class Repository {
    constructor(prop){
        this._id = -1;
        this.data = new Map();
        this._template = prop;
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validateEntity(entity);
        this.data.set(++this._id, entity);
        return this._id;
    }

    get(id) {
        this._validateId(id);
        return this.data.get(id);
    }

    update(id, newEntity) {
        this._validateId(id);
        this._validateEntity(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        this._validateId(id);
        this.data.delete(id);

    }
    _validateEntity(entity) {
        for (let prop in this._template) {
            if (!entity.hasOwnProperty(prop)) {
                throw new Error(`Property ${prop} is missing from the entity!`);
            }
            if (typeof entity[prop] !== this._template[prop]) {
                throw new TypeError(`${prop} is of incorrect type!`);
            }
        }
    }

    _validateId(id) {
        if (!this.data.has(id)) {
            throw new TypeError(`Entity with id: ${id} does not exist`);
        }
    }
}
// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
// let anotherEntity = {
//     name1: 'Nakov',
//     age: 26,
//     birthday: new Date(1991, 0, 21)
// };
// repository.add(anotherEntity); // should throw an Error
//
// repository.del(-1);
