function distanceOverTime(input) {
    let v1 = Number(input[0]) / 3.6;
    let v2 = Number(input[1]) / 3.6;
    let t = Number(input[2]);

    let s1 = v1 * t;
    let s2 = v2 * t;

    console.log(Math.abs(s1 - s2));
}

distanceOverTime(["0", "60", "3600"]);