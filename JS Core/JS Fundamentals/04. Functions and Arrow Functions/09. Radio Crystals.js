function radioCrystals(crystalData) {
    function cut(ore) {
        return ore /= 4;
    }

    function lap(ore) {
        return ore -= ore * 0.2;
    }

    function grind(ore) {
        return ore -= 20;
    }

    function etch(ore) {
        return ore -= 2;
    }

    function xRay(ore) {
        return ore += 1;
    }

    function transportingAndWashing(ore) {
        return Math.floor(ore);
    }
    for (let i = 1; i < crystalData.length; i++) {
        let target = crystalData[0];
        let ore = crystalData[i];

        console.log(`Processing chunk ${ore} microns`);
        while (ore > target && target - ore) {
            let count = 0;
            let xrayCount = 0;
            let isXrayed = false;
            while (cut(ore) >= target) {
                ore = cut(ore);
                count++;
            }


            if (count > 0) {
                console.log(`Cut x${count}`);
                ore = transportingAndWashing(ore);
                console.log('Transporting and washing');
            }
            count = 0;

            while (lap(ore) >= target) {
                ore = lap(ore);
                count++;
            }


            if (count > 0) {
                console.log(`Lap x${count}`);
                ore = transportingAndWashing(ore);
                console.log('Transporting and washing');
            }
            count = 0;

            while (grind(ore) >= target) {
                ore = grind(ore);
                count++;
            }


            if (count > 0) {
                console.log(`Grind x${count}`);
                ore = transportingAndWashing(ore);
                console.log('Transporting and washing');
            }
            count = 0;

            while (etch(ore) >= target) {
                ore = etch(ore);
                count++;
            }
            if (target - transportingAndWashing(cut(ore)) === 1 && isXrayed === false) {
                ore = etch(ore);
                count++;
                ore = xRay(ore);
                xrayCount++;
                isXrayed = true;
            }

            if (count > 0) {
                console.log(`Etch x${count}`);
                ore = transportingAndWashing(ore);
                console.log('Transporting and washing');
            }
            count = 0;

            if (ore + 1 === target && isXrayed === false) {
                ore = xRay(ore);
                xrayCount++;
                isXrayed = true;
            }

            if (xrayCount > 0) {
                console.log(`X-ray x${xrayCount}`);
            }
        }
        let xrayCount = 0;
        if (ore + 1 === target) {
            ore = xRay(ore);
            xrayCount++;
        }

        if (xrayCount > 0) {
            console.log(`X-ray x${xrayCount}`);
        }

        console.log(`Finished crystal ${ore} microns`);
    }
}

radioCrystals([11, 10]);