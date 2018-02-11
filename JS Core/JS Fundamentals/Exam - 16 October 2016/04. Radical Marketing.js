function radicalMarketing(arr) {
    arr.pop();
    let personLog = {};
    for (let line of arr) {
        if (line.length === 1) {
            if (!personLog.hasOwnProperty(line)) {
                personLog[line] = {subs: []};
                personLog[line]['subbedTo'] = 0;
            }
        } else {
            let [subscriber, account] = line.split('-');
            if (personLog.hasOwnProperty(subscriber) && personLog.hasOwnProperty(account)) {
                personLog[account]['subs'].push(subscriber);
                personLog[subscriber]['subbedTo']++;
            }
        }
    }
    let VIP = Object.keys(personLog).sort((a, b) => {
        let result = personLog[b]['subs'].length - personLog[a]['subs'].length;
        if (result === 0) {
            return personLog[b]['subbedTo'] - personLog[a]['subbedTo']
        }
        return result;
    })[0];
    console.log(VIP);
    if (personLog[VIP]['subs'].length > 0) {
        personLog[VIP]['subs'].forEach(sub => console.log(`${personLog[VIP]['subs'].indexOf(sub) + 1}. ${sub}`))
    }
}

let test1 = [ 'A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A', '' ];
let test2 = [ 'J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J', ''];
radicalMarketing(test2);