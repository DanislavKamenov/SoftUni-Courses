function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_SyF5rJe5f/biggestCatches';
    const USERNAME = 'Peter';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const authHeaders = {
        'Content-type': 'application/json',
        'Authorization': 'Basic ' + BASE_64,
    };
    $('.add').on('click', sendCatch);
    $('.load').on('click', loadCatches);

    function sendCatch(e) {
        let method = 'PUT';
        let wrapper = $(e.target).parent();
        let updateId = '/' + wrapper.attr('data-id');

        let angler = wrapper.find('.angler');
        let weight = wrapper.find('.weight');
        let species = wrapper.find('.species');
        let location = wrapper.find('.location');
        let bait = wrapper.find('.bait');
        let captureTime = wrapper.find('.captureTime');

        let catchData = {
            angler: angler.val(),
            weight: Number(weight.val()),
            species: species.val(),
            location: location.val(),
            bait: bait.val(),
            captureTime: Number(captureTime.val())
        };

        if (e.target.textContent === 'Add') {
            method = 'POST';
            updateId = '';
            angler.val('');
            weight.val('');
            species.val('');
            location.val('');
            bait.val('');
            captureTime.val('');
        }

        $.ajax({
            method: method,
            url: URL + updateId,
            headers: authHeaders,
            data: JSON.stringify(catchData),
            success: loadCatches
        });
    }

    function loadCatches() {
        $.ajax({
            method: 'GET',
            url: URL,
            headers: authHeaders,
            success: handleSuccess
        });

        function handleSuccess(res) {
            let catches = $('#catches');
            catches.empty();
            $.each(res, function (idx, catchData) {
                catches
                    .append($(`<div class="catch" data-id="${catchData._id}">`)
                        .append($('<label>Angler</label>'))
                        .append($(`<input type="text" class="angler" value="${catchData.angler}">`))
                        .append($('<label>Weight</label>'))
                        .append($(`<input type="number" class="weight" value="${catchData.weight}">`))
                        .append($('<label>Species</label>'))
                        .append($(`<input type="text" class="species" value="${catchData.species}">`))
                        .append($('<label>Location</label>'))
                        .append($(`<input type="text" class="location" value="${catchData.location}">`))
                        .append($('<label>Bait</label>'))
                        .append($(`<input type="text" class="bait" value="${catchData.bait}">`))
                        .append($('<label>Capture Time</label>'))
                        .append($(`<input type="number" class="captureTime" value="${catchData.captureTime}">`))
                        .append($('<button class="update">Update</button>').on('click', sendCatch))
                        .append($('<button class="delete">Delete</button>').on('click', deleteCatch)));

            });

            function deleteCatch(e) {
                let currentCatch = $(e.target).parent();
                let id = currentCatch.attr('data-id');

                $.ajax({
                    method: 'DELETE',
                    url: URL + '/' + id,
                    headers: authHeaders,
                    success: () => currentCatch.remove()
                });
            }
        }
    }
}