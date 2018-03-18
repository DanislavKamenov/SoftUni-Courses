class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    addTopic(title, date) {
        this.topics.push({title: title, date: date});
        this.topics.sort((a, b) => a.date - b.date);
        return this;
    }

    toString() {
        let output = `Course "${this.title}" by ${this.trainer}\n`;
        this.topics.forEach(topic => output +=` * ${topic.title} - ${topic.date}\n`);
        if (output.includes('*')) {
            output = output.replace(/\n$/, "");
        }
        return output;
    }
}