//local storage of ads.
let adsCache = [];

function createAd(e) {
    //POST data in kinvey DB.
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
    //GET data from kinvey.
    return webApi.sendRequest('GET', webApi.ACTIONS.accessCollection, webApi.authHeaders.user)
        .then((res) => {
            res.map(ad => {
                if (ad._acl.creator === sessionStorage.getItem('userId')) {
                    ad.isOwnedByUser = true;
                }
            });
            adsCache = res.sort((a, b) => b.viewCount - a.viewCount);
            loadListTemplate({ads: adsCache});
        })
        .catch(webApi.handleAjaxError);

}

function deleteAd(e) {
    //Send DELETE request.
    let id = $(e.target).parent().parent().attr('id');
    webApi.sendRequest('DELETE', webApi.ACTIONS.accessCollection + '/' + id, webApi.authHeaders.user)
        .then(() =>{
            //Update local storage
            adsCache = adsCache.filter((obj) => obj._id !== id);
            loadListTemplate({ads: adsCache});
            showInfo('Advert deleted.');
        })
        .catch(webApi.handleAjaxError);
}

function editAd() {
    //Send PUT request.
    //Data is filtered by preSaveHook.
    let parent = $('#formEditAd');
    let id = parent.find('input[name="id"]').val();
    let title = parent.find('input[name="title"]').val();
    let description = parent.find('textarea[name="description"]').val();
    let datePublished = parent.find('input[name="datePublished"]').val();
    let price = Number(parent.find('input[name="price"]').val()).toFixed(2);
    let image = parent.find('input[name="image"]').val();
    let dataObj = {title, description, datePublished, price, image};

    webApi.sendRequest('PUT', webApi.ACTIONS.accessCollection + '/' + id, webApi.authHeaders.user, dataObj)
        .then((res) => {
            // Update local storage
            for (let ad of adsCache) {
                if (ad._id === id) {
                    ad.title = res.title;
                    ad.description = res.description;
                    ad.datePublished = res.datePublished;
                    ad.price = res.price;
                    ad.image = res.image;
                    ad.viewCount = res.viewCount;
                    break;
                }
            }
            loadListTemplate({ads: adsCache});
            showInfo('Edit Successful.')
        })
        .catch(webApi.handleAjaxError);
}

function incrementViews(e) {
    //send GET request to trigger preFetchHook and increment view counter in kinvey before rendering.
    let id = $(e.target).parent().parent().attr('id');
    webApi.sendRequest('GET', webApi.ACTIONS.accessCollection + '/' + id, webApi.authHeaders.user)
        .then(loadAdDetailsTemplate)
        .catch(webApi.handleAjaxError);
}