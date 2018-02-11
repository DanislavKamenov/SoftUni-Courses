function restHouse(rooms, guests) {
    let teaHouse = {
        guests: 0
    };
    for (let room of rooms) {
        if (room.type === 'double-bedded') {
            room['guests'] = [];
            room['beds'] = 2 - room.guests.length;
        } else {
            room['guests'] = [];
            room['beds'] = 3 - room.guests.length;
        }
    }
    while (!isEmptyObject(guests)) {
        for (let pair in guests) {
            assignGuests(guests[pair], pair);
        }
    }

    for (let room of rooms.sort((a, b) => {
        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1;
        if (a.number === b.number) return 0
    })) {
        console.log(`Room number: ${room.number}`);
        for (let client of room.guests.sort(((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            if (a.name === b.name) return 0
        }))) {
            console.log(`--Guest Name: ${client.name}`);
            console.log(`--Guest Age: ${client.age}`);

        }
        console.log(`Empty beds in the room: ${room.beds}`);
    }
    console.log(`Guests moved to the tea house: ${teaHouse.guests}`);

    function assignGuests(pair, key) {

        let {first, second} = pair;
        if (first.gender !== second.gender) {
            let doubleRooms = rooms.filter(rm => rm.beds === 2);
            if (doubleRooms.length > 0) {
                doubleRooms[0].guests.push(first);
                doubleRooms[0].guests.push(second);
                doubleRooms[0].beds -= 2;
                delete guests[key];
            }
        } else {
            let oneBedLeftRoom = rooms.filter(rm => rm.beds === 1).filter(x => x.guests[0].gender === pair.first.gender);
            if (oneBedLeftRoom.length > 0) {
                for (let person in pair) {
                    let student = pair[person];
                    oneBedLeftRoom = rooms.filter(rm => rm.beds === 1).filter(x => x.guests[0].gender === student.gender);
                    if ( oneBedLeftRoom.length === 0) break;
                    for (let room of oneBedLeftRoom) {
                        if (student.gender === room.guests[0].gender) {
                            room.guests.push(student);
                            room.beds -= 1;
                            delete guests[key][person];
                            if (isEmptyObject(guests[key])) {
                                delete guests[key];
                            }
                        }
                    }
                }
            } else {
                    let tripleRooms = rooms.filter(rm => rm.beds === 3);
                    if (tripleRooms.length > 0) {
                        tripleRooms[0].guests.push(first);
                        tripleRooms[0].guests.push(second);
                        tripleRooms[0].beds -= 2;
                        delete guests[key];
                }
            }
        }
        if (!isEmptyObject(guests[key])) {
            for (let person in pair) {
                teaHouse.guests += 1;
                delete guests[key][person];
                if (isEmptyObject(guests[key])) {
                    delete guests[key];
                }
            }
        }
    }

    function isEmptyObject(obj) {
        for (let prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }
        }
        return true;
    }
}

let suites = [{"number": "428", "type": "triple"},
    {"number": "161", "type": "triple"},
    {"number": "242", "type": "double-bedded"},
    {"number": "537", "type": "triple"}]
let people = [{
    "first": {"name": "Nina Diaz", "gender": "female", "age": 29},
    "second": {"name": "Carol Hansen", "gender": "female", "age": 6}
},
    {
        "first": {"name": "Georgia Thomas", "gender": "female", "age": 38},
        "second": {"name": "Freddie Harmon", "gender": "male", "age": 46}
    },
    {
        "first": {"name": "Freddie Harmon", "gender": "male", "age": 30},
        "second": {"name": "Jesus Terry", "gender": "male", "age": 64}
    },
    {
        "first": {"name": "Tracy Reid", "gender": "male", "age": 41},
        "second": {"name": "Jordan Garner", "gender": "male", "age": 16}
    },
    {
        "first": {"name": "Kara Burns", "gender": "female", "age": 7},
        "second": {"name": "Marjorie Butler", "gender": "female", "age": 28}
    }];
let suites2 = [{number: '101A', type: 'double-bedded'},
    {number: '104', type: 'triple'},
    {number: '101B', type: 'double-bedded'},
    {number: '102', type: 'triple'}];
let people2 = [{
    first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
    second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
},
    {
        first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
        second: {name: 'Jeko Snejev', gender: 'male', age: 18}
    },
    {
        first: {name: 'Pesho Goshov', gender: 'male', age: 20},
        second: {name: 'Gosho Peshov', gender: 'male', age: 18}
    },
    {
        first: {name: 'Conor McGregor', gender: 'male', age: 29},
        second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
    }];


restHouse(suites, people);

//if (oneBedLeftRooms.length > 0 && oneBedLeftRooms[0].guests[0].gender === pair.first.gender) {
//    oneBedLeftRooms[0].push(pair.first);
//    oneBedLeftRooms[0].beds -= 1;
//    if (oneBedLeftRooms.length > 1 && oneBedLeftRooms[1].guests[1].gender === pair.first.gender) {
//        oneBedLeftRooms[1].push(pair.second);
//        oneBedLeftRooms[1].beds -= 1;
//    } else if (tripleBeds.length > 0) {
//
//    }
//} else {
//
//
//}