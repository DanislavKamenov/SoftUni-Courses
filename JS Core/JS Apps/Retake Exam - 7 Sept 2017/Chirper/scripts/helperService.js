function showInfo(message) {
    let infoBox = $('#infoBox');
    let field = infoBox.find('span');
    field.text(message);
    infoBox.show();
    setTimeout(() => infoBox.fadeOut(), 3000);
}

function showError(message) {
    let errorBox = $('#errorBox');
    let field = errorBox.find('span');
    field.text(message);
    errorBox.show();
}

function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);
    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}
