function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type=button]');
    Array.from(buttons).forEach(button => button.addEventListener('click', calcTime));
    function calcTime(event) {
        let name = event.target.id.split('Btn')[0];
        let inputTime = document.getElementById(name);
        let toSecConverter = {
            seconds: Number(inputTime.value),
            minutes: Number(inputTime.value) * 60,
            hours: Number(inputTime.value) * 3600,
            days: Number(inputTime.value) * 86400
        };
        document.getElementById('seconds').value = parseFloat((toSecConverter[name]).toFixed(1));
        document.getElementById('minutes').value = parseFloat((toSecConverter[name] / 60).toFixed(1));
        document.getElementById('hours').value = parseFloat((toSecConverter[name] / 3600).toFixed(1));
        document.getElementById('days').value = parseFloat((toSecConverter[name] / 86400).toFixed(1));
    }
}