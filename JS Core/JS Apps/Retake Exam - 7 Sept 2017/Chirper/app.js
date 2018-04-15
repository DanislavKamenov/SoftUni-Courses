function appStart() {
    loadTemplates()
        .then(() => {
            if (auth.is()) {
                loadNavigation();
                loadHomeFeed();
            } else {
                loadLoginForm();
            }
            loadFooter();
            eventBinder.notificationEvents();
        })
        .catch(webApi.handleAjaxError);
}