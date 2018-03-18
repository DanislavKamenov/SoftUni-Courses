class PaymentProcessor {
    constructor(optionsObj) {
        this.setOptions(optionsObj);
        this.list = new Map();
    }

    registerPayment(id, name, type, value) {
        if (typeof id === 'string' && id.length !== 0 &&
            typeof name === 'string' && name.length !== 0 &&
            this.options.types.includes(type)) {
            if (Number(value) && value !== null) {
                if (!this.list.has(id)) {
                    return this.list.set(id, {name, type, value});                    
                }
            }
        }
        throw new Error();
    };

    deletePayment(id) {
        if (this.list.has(id)) {
            this.list.delete(id);
        } else {
            throw new Error();
        }
    };

    get(id) {
        if (this.list.has(id)) {
            let payment = this.list.get(id);
            let precision = this.options.precision;
            return `Details about payment ID: ${id}\n- Name: ${payment.name}\n- Type: ${payment.type}\n- Value: ${payment.value.toFixed(precision)}`
        } else {
            throw new Error();
        }
    };

    setOptions(newOptions) {
        let options = {
            types: ["service", "product", "other"],
            precision: 2
        };
        if (newOptions !== undefined && newOptions !== null){
            for (let prop in newOptions) {
                options[prop] = newOptions[prop];
            }
        }
        return this.options = options;
    };

    toString() {
        let balance = [...this.list].map(payment => payment[1].value).reduce((a, b) => a + b, 0);
        let precision = this.options.precision;
        return `Summary: \n- Payments: ${this.list.size}\n- Balance: ${balance.toFixed(precision)}`;
    };
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());



