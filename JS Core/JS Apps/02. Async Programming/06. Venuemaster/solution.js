function attachEvents() {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_ID = 'kid_BJ_Ke8hZg';
    const USERNAME = 'guest';
    const PASSWORD = 'pass';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const authHeaders = {
        'Authorization': 'Basic ' + BASE_64,
    };
    let wrapper = $('#venue-info');

    $('#getVenues').on('click', getVenues);

    function getVenues() {
        let date = $('#venueDate').val();
        wrapper.empty();

        request('POST', `rpc/${APP_ID}/custom/calendar?query=${date}`)
            .then(function (res) {
                res.forEach(id => {
                    request('GET', `appdata/${APP_ID}/venues/${id}`)
                        .then(loadVenues);
                });
            })
    }

    function loadVenues(venue) {
        let template =
            $(`<div class="venue" id="${venue._id}">
                      <span class="venue-name"><input class="info" type="button" value="More info" onclick="script.showInfo()">${venue.name}</span>
                      <div class="venue-details" style="display: none;">
                        <table>
                          <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
                          <tr>
                            <td class="venue-price">${venue.price} lv</td>
                            <td><select class="quantity">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select></td>
                            <td><input class="purchase" type="button" value="Purchase" onclick="script.purchaseDialog()"></td>
                          </tr>
                        </table>
                        <span class="head">Venue description:</span>
                        <p class="description">${venue.description}</p>
                        <p class="description">Starting time: ${venue.startingHour}</p>
                      </div>
                    </div>`);

        wrapper.append(template);
    }

    function showInfo() {
        $('.venue-details').hide();
        $(event.target).parent().next().show();
    }

    function purchaseDialog() {
        let parent = $(event.target).closest('.venue');
        let id = $(event.target).closest('.venue').attr('id');
        let name = parent.find('.venue-name').text();
        let qty = parent.find(':selected').text();
        let price = +parent.find('.venue-price').text().split(' ')[0];
        sessionStorage.clear();
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('qty', qty);

        wrapper.empty();
        let template =
            `<span class="head">Confirm purchase</span>
             <div class="purchase-info">
                <span>${name}</span>
                <span>${qty} x ${price}</span>
                <span>Total: ${qty * price} lv</span>
                <input type="button" value="Confirm" onclick="script.confirmPurchase()">
             </div>`;
        wrapper.append(template);
    }

    function confirmPurchase() {
        request('POST', `rpc/${APP_ID}/custom/purchase?venue=${sessionStorage.getItem('id')}&qty=${sessionStorage.getItem('qty')}`)
            .then(function(res) {
                wrapper.empty();
                wrapper.text('You may print this page as your ticket');
                wrapper.append($(res.html));
                sessionStorage.clear();
            });
    }

    function request(method, target, data) {
        return $.ajax({
            method,
            url: BASE_URL + target,
            headers: authHeaders,
            data
        });
    }

    return {showInfo, purchaseDialog, confirmPurchase};
}