function ticketManager(ticketDescriptions, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let output = [];

    for (let ticket of ticketDescriptions) {
        [destination, price, status] = ticket.split('|');
        output.push(new Ticket(destination, price, status));
    }
    return sortCriteria !== 'price' ? output.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria])) :
        output.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
}

console.log(ticketManager(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));