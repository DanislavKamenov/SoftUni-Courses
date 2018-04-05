function createAd(e) {
    let parent = $(e.target).parent().parent();
    let title = parent.find('input[name=title]').val();
    let description = parent.find('textarea[name=description]').val();
    let publisher = sessionStorage.getItem('username');
    let datePublished = parent.find('input[name=datePublished]').val();
    let price = Number(parent.find('input[name=price]').val()).toFixed(2);
    let image = parent.find('input[name=image]').val();
    let dataObj = {title, description, publisher, datePublished, price, image};

    webApi.sendRequest('POST', webApi.ACTIONS.accessCollection, webApi.authHeaders.user, dataObj)
        .then(() => listAds().then(() => showInfo('Advert created.')))
        .catch(webApi.handleAjaxError);
}

function listAds() {
    return webApi.sendRequest('GET', webApi.ACTIONS.accessCollection, webApi.authHeaders.user)
        .then((res) => {
            showView('#viewAds');
            displayAds(res.sort((a, b) => b.viewCount - a.viewCount));
        })
        .catch(webApi.handleAjaxError);

}

function deleteAd(e) {
    let id = $(e.target).parent().parent().attr('id');
    webApi.sendRequest('DELETE', webApi.ACTIONS.accessCollection + '/' + id, webApi.authHeaders.user)
        .then(() =>{
            $(`tr[id="${id}"]`).remove();
            showInfo('Advert deleted.');
        })
        .catch(webApi.handleAjaxError);
}

function editAd() {
    let parent = $('#formEditAd');
    let id = parent.find('input[name="id"]').val();
    let title = parent.find('input[name="title"]').val();
    let description = parent.find('textarea[name="description"]').val();
    let datePublished = parent.find('input[name="datePublished"]').val();
    let price = parent.find('input[name="price"]').val();
    let image = parent.find('input[name="image"]').val();
    let dataObj = {title, description, datePublished, price, image};

    webApi.sendRequest('PUT', webApi.ACTIONS.accessCollection + '/' + id, webApi.authHeaders.user, dataObj)
        .then(() => listAds().then(() => showInfo('Edit Successful.')))
        .catch(webApi.handleAjaxError);
}

function incrementViews(e) {
    let id = $(e.target).parent().parent().attr('id');
    webApi.sendRequest('GET', webApi.ACTIONS.accessCollection + '/' + id, webApi.authHeaders.user)
        .then(showAdDetails)
        .catch(webApi.handleAjaxError);
}