function attachEvents() {
    const URL = 'https://phonebook-2e826.firebaseio.com/phonebook';
    $('#btnCreate').on('click', sendData);
    $('#btnLoad').on('click', pullData);
    let list = $('#phonebook');

    function sendData() {
        let person = $('#person');
        let phone = $('#phone');
        let phoneData  = {person: person.val(), phone:phone.val()};
        $.post(URL + '.json', JSON.stringify(phoneData))
            .then((res) => {parseData({[res.name]: {person: phoneData.person, phone: phoneData.phone}})})
            .catch(handleError);
        person.val('');
        phone.val('');
    }

    function pullData() {
        $.get(URL + '.json')
            .then(parseData, list.html(''))
            .catch(handleError);
    }

    function parseData(res) {
        $.each(res, function (key, value) {
                let li = $(`<li>`);
                li.text(`${value.person}: ${value.phone} `)
                    .append($('<button>Delete</button>').on('click', deleteData.bind(null, key, li)));
                list.append(li)
        });

         function deleteData(key, li) {
             $.ajax({
                 method: 'DELETE',
                 url: URL + `/${key}.json`,
                 success: handleSuccess,
                 error: handleError
             });

             function handleSuccess() {
                 li.remove();
             }
         }
    }

    function handleError(err) {
        console.log(err)
    }
}