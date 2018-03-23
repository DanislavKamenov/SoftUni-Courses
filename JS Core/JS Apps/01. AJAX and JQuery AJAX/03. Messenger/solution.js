function attachEvents() {
    const URL = 'https://messenger-4da1d.firebaseio.com/';

    $('#submit').on('click', send);
    $('#refresh').on('click', refresh);

    function send() {
        let author = $('#author');
        let message = $('#content');
        let postData = JSON.stringify({author: author.val(), content: message.val(), timestamp: Date.now()});

        if (author.val().length !== 0 && message.val().length !== 0) {
            $.ajax({
                method: 'POST',
                data: postData,
                url: URL + '.json',
                success: refresh,
                error: handleError
            })
        }
    }

    function refresh() {
        $.ajax({
            url: URL + '.json',
            success: handleSuccess,
            error: handleError
        });

        function handleSuccess(res) {
            let textArea = $('#messages');
            textArea.empty();
            let messageString;
            $.each(res, (id, message) => {
                if (message.author.length !== 0 && message.content !== 0) {
                    messageString += `${message.author}: ${message.content}\n`;
                    textArea.text(messageString);
                }
            })
        }
    }

    function handleError(err) {
        console.log(err)
    }
}