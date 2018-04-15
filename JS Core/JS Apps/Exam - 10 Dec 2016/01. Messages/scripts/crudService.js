let crud = (() => {

    function getRecipientMessages(username) {
        let query = `?query={"recipient_username":"${username}"}`;
        return webApi.get('user', 'appdata', 'messages' + query);
    }

    function getSenderMessages(username) {
        let query = `?query={"sender_username":"${username}"}`;
        return webApi.get('user', 'appdata', 'messages' + query);
    }

    function getAllUsers() {
        return webApi.get('user', 'user');
    }
    
    function sendMessage(data) {
        return webApi.post('user', data, 'appdata', 'messages');
    }

    function deleteMessage(id) {
        return webApi.remove('user', 'appdata', 'messages', id);
    }

    return {
        getRecipientMessages,
        getAllUsers,
        sendMessage,
        getSenderMessages,
        deleteMessage,
    }
})();