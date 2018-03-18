function CheckingAccount(clientId, email, firstName, lastName) {
    this.clientId = (function () {
        if (clientId.length !== 6 || isNaN(Number(clientId))) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        return clientId;
    })();
    this.email = (function () {
        let pattern = /\w+@[\w.]+/g;
        if (!pattern.test(email)) {
            throw new TypeError('Invalid e-mail');
        }
        return email;
    })();
    this.firstName = (function () {
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        let pattern = /^[A-Za-z]+$/;
        if (!pattern.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters')
        }
        return firstName;
    })();
    this.lastName = (function () {
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        let pattern = /^[A-Za-z]+$/;
        if (!pattern.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters')
        }
        return lastName;
    })();
}

//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')