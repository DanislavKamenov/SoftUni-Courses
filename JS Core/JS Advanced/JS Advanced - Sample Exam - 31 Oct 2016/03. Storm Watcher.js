class Record {
    constructor(temperature, humidity, pressure, windSpeed) {
        this.id = Record.setId();
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    get status() {
        if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
            return 'Stormy';
        }
        return 'Not stormy';
    }

    static setId() {
        if (Record.id === undefined) {
            Record.id = 0;
        }
        return Record.id++;
    }

    toString() {
        return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%` +
            `\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${this.status}`;
    }
}


let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());

