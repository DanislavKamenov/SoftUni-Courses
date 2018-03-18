class MailBox {
    constructor() {
        this.messageList = [];
    }

    get messageCount() {
        return this.messageList.length;
    }

    addMessage(subject, text) {
        this.messageList.push({subject, text});
        return this;
    }

    deleteAllMessages() {
        this.messageList = [];
    }

    findBySubject(substr) {
        return this.messageList.filter(msg => msg.subject.includes(substr));
    }

    toString() {
        if (this.messageCount > 0) {
            return this.messageList.map(msg => ` * [${msg.subject}] ${msg.text}`).join('\n');
        }
        return ' * (empty mailbox)';
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
