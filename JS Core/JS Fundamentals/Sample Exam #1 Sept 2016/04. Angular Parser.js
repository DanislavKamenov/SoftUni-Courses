function angularParser(input) {
    input.pop();
    let modulesMap = new Map();
    let tempMap = new Map();
    for (let line of input) {
        let [element, elName, parent, parName] = line.split('\'').filter(x => x !== '');
        if (element === '$app=') {
            if (!modulesMap.has(elName)) {
                modulesMap.set(elName, {controllers: [], models: [], views: []});
            }
            if (tempMap.has(elName)) {
                modulesMap.get(elName)['controllers'] = modulesMap.get(elName)['controllers'].concat(tempMap.get(elName)['controllers'].sort());
                modulesMap.get(elName)['models'] = modulesMap.get(elName)['models'].concat(tempMap.get(elName)['models'].sort());
                modulesMap.get(elName)['views'] = modulesMap.get(elName)['views'].concat(tempMap.get(elName)['views'].sort());
                tempMap.delete(elName);
            }
        } else{
            let prop = element.slice(1, element.length - 1) + 's';
            if (modulesMap.has(parName)) {
                modulesMap.get(parName)[prop].push(elName);
                modulesMap.get(parName)[prop].sort();
            } else {
                if (!tempMap.has(parName)) {
                    tempMap.set(parName, {controllers: [], models: [], views: []});
                    tempMap.get(parName)[prop].push(elName);
                } else {
                    tempMap.get(parName)[prop].push(elName);
                }
            }
        }
    }
    let sortedModules = [...modulesMap.entries()].sort((a, b) => {
       let criteria = b[1]['controllers'].length - a[1]['controllers'].length;
        if (criteria === 0) {
            return a[1]['models'].length - b[1]['models'].length;
        }
        return criteria;
    });
    let outputObj = {};
    for (let [name, obj] of sortedModules) {
        outputObj[name] = obj;
    }
    console.log(JSON.stringify(outputObj));
}

let arr = ['$controller=\'PHPController\'&app=\'Language Parser\'',
'$controller=\'JavaController\'&app=\'Language Parser\'',
'$controller=\'C#Controller\'&app=\'Language Parser\'',
'$controller=\'C++Controller\'&app=\'Language Parser\'',
'$app=\'Garbage Collector\'',
'$controller=\'GarbageController\'&app=\'Garbage Collector\'',
'$controller=\'SpamController\'&app=\'Garbage Collector\'',
'$app=\'Language Parser\''];

angularParser(arr);