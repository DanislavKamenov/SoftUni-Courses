function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_SyF5rJe5f/';
    const USERNAME = 'Peter';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const authHeaders = {Authorization: 'Basic ' + BASE_64};
    let posts = {};

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPost);
    
    function loadPosts() {
        $.ajax({
            url: URL + 'posts',
            headers: authHeaders,
            success: handleSuccess
        });

        function handleSuccess(res) {
            $('#posts').empty();
            $.each(res, function (key, value) {
                $('#posts').append(
                    $(`<option value="${value._id}">${value.title}</option>`)
                );
                posts[value._id] = value.body;
            })
        }
    }
    
    function viewPost() {
        let postId = $('#posts');
        $.ajax({
            url: URL + `comments/?query={"post_id":"${postId.val()}"}`,
            headers: authHeaders,
            success: handleSuccess
    });
        function handleSuccess(res) {
            $('#post-comments').empty();
            $('#post-title').text(postId.find('option:selected').text());
            $('#post-body').text(posts[postId.val()]);
            $.each(res, function (key, value) {
                $('#post-comments').append(
                    $(`<li>${value.text}</li>`)
                )
            })
        }
    }
}