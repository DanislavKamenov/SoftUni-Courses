function systemComponents(systemArr) {
    let systems = {};
    for (let systemInfo of systemArr) {
        let [system, component, subcomponent] = systemInfo.split(' | ');
        if (!systems.hasOwnProperty(system)) {
            systems[system] = {
                [component]: [subcomponent]
            };
        } else if (!systems[system].hasOwnProperty(component)){
            systems[system][component] = [subcomponent];
        } else {
            systems[system][component].push(subcomponent);
        }


    }
    let sortedSys = Object.keys(systems).sort((x, y) => {
        let result = Object.keys(systems[y]).length - Object.keys(systems[x]).length;
        if (result === 0) {
            if(x < y) return -1;
            if(x > y) return 1;
            return 0;
        }
        return result;
    });
    for (let sys of sortedSys) {
        console.log(sys);
        let sortedComp = Object.keys(systems[sys]).sort((a, b) => (systems[sys][b].length - systems[sys][a].length));
        for (let comp of sortedComp) {
            console.log(`|||${comp}`);
            systems[sys][comp].forEach(subcomp => console.log(`||||||${subcomp}`));
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);