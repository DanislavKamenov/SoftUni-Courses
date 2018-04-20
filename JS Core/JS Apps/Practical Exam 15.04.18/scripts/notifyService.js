let notify = (() => {
    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.find('span').text(message);
        errorBox.show();
    }
    
    function attachNotificationEvents() {
        $(document).on({
            ajaxStart: () => $('#loadingBox').show(),
            ajaxStop: () => $('#loadingBox').hide()
        });

        $('#infoBox, #errorBox').on('click', function() {
            $(this).fadeOut()
        });
    }

    return {
        showInfo,
        showError,
        attachNotificationEvents,
    }
})();