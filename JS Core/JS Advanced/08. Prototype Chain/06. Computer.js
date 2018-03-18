function createComputerHierarchy() {
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Can not instantiate directly.')
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }
        
        set battery(bat) {
            if (!(bat instanceof Battery)) {
                throw new TypeError('Object is not an instance of the correct class');
            }
            this._battery = bat;
        }

        get battery() {
            return this._battery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        set keyboard(kb) {
            if (!(kb instanceof Keyboard)) {
                throw new TypeError('Object is not an instance of the correct class');
            }
            this._keyboard = kb;
        }

        get keyboard() {
            return this._keyboard;
        }

        set monitor(mon) {
            if (!(mon instanceof Monitor)) {
                throw new TypeError('Object is not an instance of the correct class');
            }
            this._monitor = mon;
        }

        get monitor() {
            return this._monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}