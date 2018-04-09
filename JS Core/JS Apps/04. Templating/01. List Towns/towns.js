function attachEvents() {
    $('#btnLoadTowns').on('click', function (e) {
        let towns = $(e.target).prev().val().split(', ');
        let source = $('#towns-template').html();
        let template = Handlebars.compile(source);
        let context = {towns};
        $('#root').html(template(context));
    })
}