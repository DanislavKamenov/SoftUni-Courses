async function startApp() {
    loadTemplates()
        .then(() => {
            loadNavigationTemplate();
            loadHomeTemplate();

        })
        .catch(webApi.handleAjaxError);
}