function attachEventListener() {
    document.getElementById('convert').addEventListener('click', convertUnits);
function convertUnits() {
    let inputVal = document.getElementById('inputDistance').value;
    let inputType = document.getElementById('inputUnits').value;
    let outputType = document.getElementById('outputUnits').value;

    let toMetreConverter = {
        in: inputVal * 0.0254,
        ft: inputVal * 0.3048,
        yrd: inputVal * 0.9144,
        mi: inputVal * 1609.34,
        mm: inputVal * 0.001,
        cm: inputVal * 0.01,
        m: inputVal * 1,
        km: inputVal * 1000
    };
    let unitConverter = {
        in: val => val / 0.0254,
        ft: val => val / 0.3048,
        yrd: val => val / 0.9144,
        mi: val => val / 1609.34,
        mm: val => val / 0.001,
        cm: val => val / 0.01,
        m: val => val / 1,
        km: val => val / 1000
    };

    document.getElementById('outputDistance').value = unitConverter[outputType](toMetreConverter[inputType]);
    }
}