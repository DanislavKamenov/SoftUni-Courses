class Timer {
    constructor(callback, delay) {
        this.timerId,
        this.triggeredAt,        
        this.timeLeft,        
        this.task = callback;
        this.delay = delay;
        this.start = this.start.bind(this);
    }

    _getTimeLeft() {
        const now = new Date();
        return this.delay - ((now - this.triggeredAt) % this.delay);
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    pause() {        
        clearInterval(this.timerId);        
        this.timerId = null;
        this.timeLeft = this._getTimeLeft();
    }

    start() {
        this.triggeredAt = new Date().getTime();
        clearInterval(this.timerId);
        this.timerId = setInterval(this.task, this.delay);
    }

    resume() {
        if (this.timerId === null) {
            setTimeout(this.start, this.timeLeft);
        }
    }
}

module.exports = Timer;