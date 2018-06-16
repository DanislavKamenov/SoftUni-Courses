function calcTotal() {
    let daysToRent = $('#days');
    let priceperDay = $('#pricePerDay');
    let total = $('#total');
    
    daysToRent.on('input', () => {
        if (!isNaN(daysToRent.val()) && daysToRent.val() !== true && daysToRent.val() != false && daysToRent.val() != 0 || daysToRent.val() === '') {
            let first = +priceperDay.text().split(' ')[0];
            let second = +daysToRent.val();
            let sum = first * second;
            total.text(`Total Price: ${sum} lv.`);
        }
    });
}