let notify = (() => {
    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
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