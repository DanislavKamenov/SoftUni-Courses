function attachEvents() {
    const BASE_URL = 'https://baas.kinvey.com/appdata/kid_SyF5rJe5f/';
    const USERNAME = 'Chokes';
    const PASSWORD = '123';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const authHeaders = {
        'Authorization': 'Basic ' + BASE_64,
    };

    $('#countryCreate').on('submit', ['countries'], createEntity);
    $('#townCreate').on('submit', ['towns'], createEntity);
    $('#load').on('click', loadEntities.bind(null, 'countries'));

    async function createEntity(e) {
        e.preventDefault();
        console.log($(e.target).find('input'));
        let collection = e.data[0];
        let dataObj = {};

        $(e.target).find('input').each(function (idx, value) {
            dataObj[$(value).attr('id')] = $(value).val();
        });

        await to(request('POST', collection, dataObj));
        loadEntities(collection);
    }

    async function loadEntities() {
        let countryData = await to(request('GET', 'countries'));
        let townData = await to(request('GET', 'towns'));
        let wrapper = $('#results').find('tbody');
        wrapper.empty();

        countryData.forEach(country => {
            let tr = $('<tr>');
            wrapper.append(tr);
            tr.append($(`<td value="${country._id}">${country.countryName}: </td>`));
            let townsInCountry = townData.filter(town => town.parentCountry === country.countryName);
            if (townsInCountry.length > 0) {
                console.log(townsInCountry);
                townsInCountry.forEach(town => {
                    console.log('hello');
                    tr.append($(`<td value="${town._id}">${town.townName}</td>`));
                });
            }
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

    function to(promise) {
        return promise.then(data => {
            return data;
        }).catch(err => console.log(err));
    }
}