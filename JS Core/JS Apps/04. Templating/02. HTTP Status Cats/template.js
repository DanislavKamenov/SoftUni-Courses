$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let source = $('#cat-template').html();
        let template = Handlebars.compile(source);
        template = template({cats: window.cats});
        $('#allCats').html(template);
        let options = {start: onStart};

        $('.btn-primary').on('click', (e) => $(e.target).next().toggle(options));

        function onStart () {
            let btn = $(this).prev();
            if (btn.text().startsWith('Show')) {
                btn.text('Hide status code');
            } else {
                $(this).prev().text('Show status code');
            }
        }
    }
});
