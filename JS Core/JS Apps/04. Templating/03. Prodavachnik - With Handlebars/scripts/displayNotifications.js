function showInfo(message) {
    let infoBox = $('#infoBox');
    infoBox.show().text(message);
    setTimeout(() => infoBox.fadeOut(), 3000);
}

function showError(message) {
    let errorBox = $('#errorBox');
    errorBox.show().text(message);
}