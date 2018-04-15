function getChirpsBySubscriptions() {
    let subs = sessionStorage.getItem('subs').split(',');
    let query = '?query={"author":{"$in": ' + subs + '}}&sort={"_kmd.ect": 1}';
    return webApi.sendRequest('GET', webApi.ACTIONS.accessCollection + query, webApi.authHeaders.user);
}

function getUserChirps(username) {
    let query = `?query={"author":"${username}"}`;
    return webApi.sendRequest('GET', webApi.ACTIONS.accessCollection + query, webApi.authHeaders.user);
}

function getUserSubscriptions(username) {
    let query = `?query={"username":"${username}"}`;
    return webApi.sendRequest('GET', webApi.ACTIONS.register + query, webApi.authHeaders.user);
}

function getUserFollowers(username) {
    let query = `?query={"subscriptions":"${username}"}`;
    return webApi.sendRequest('GET', webApi.ACTIONS.register + query, webApi.authHeaders.user);
}

function getAllUsers() {
    return webApi.sendRequest('GET', webApi.ACTIONS.register, webApi.authHeaders.user)
}

function followUser(event) {
    let username = $(event.target).prev().text();
    let userId = sessionStorage.getItem('userId');
    let subscriptions = JSON.parse(sessionStorage.getItem('subs'));
        subscriptions.push(username);
    webApi.sendRequest('PUT', webApi.ACTIONS.register + userId, webApi.authHeaders.user, {subscriptions})
        .then(() => {
            sessionStorage.setItem('subs', JSON.stringify(subscriptions));
            showInfo(`Subscribed to ${username}!`)

        })
        .catch(webApi.handleAjaxError);
}

function unfollowUser(event) {
    let username = $(event.target).prev().text();
    let userId = sessionStorage.getItem('userId');
    let subscriptions = JSON.parse(sessionStorage.getItem('subs')).filter(name => name !== username);
    webApi.sendRequest('PUT', webApi.ACTIONS.register + userId, webApi.authHeaders.user, {subscriptions})
        .then(() => {
            sessionStorage.setItem('subs', JSON.stringify(subscriptions));
            showInfo(`Unsubscribed to ${username}!`)
        })
        .catch(webApi.handleAjaxError);
}

function createChirp(event) {
    event.preventDefault();
    let text = $(this).find('textarea').val();
    if (text.length === 0) {
        showError('Please enter a message!');
    } else if (text.length > 150) {
        showError('Message too long!');
    } else {
        let author = sessionStorage.getItem('username');
        let data = {text, author};
        webApi.sendRequest('POST', webApi.ACTIONS.accessCollection, webApi.authHeaders.user, data)
            .then(() => {
                showInfo('Chirp posted!');
                loadAccountInfo();
            })
            .catch(webApi.handleAjaxError);
    }
}

function deleteChirp(event) {
    let id = $(event.target).attr('data-id');
    webApi.sendRequest('DELETE', webApi.ACTIONS.accessCollection + '/' + id, webApi.authHeaders.user)
        .then($(event.target).closest('article').remove())
        .catch(webApi.handleAjaxError);
}

async function getDataForHomeFeed() {
    let username = sessionStorage.getItem('username');
    let [chirpsBySub, userChirps, userFollowers] = await Promise.all([
        getChirpsBySubscriptions(username),
        getUserChirps(username),
        getUserFollowers(username)
    ]).catch(webApi.handleAjaxError);
    return [chirpsBySub, userChirps.length, userFollowers.length];
}

async function getDataForUserFeed(username) {
    let [userChirps, user, userFollowers] = await Promise.all([
        getUserChirps(username),
        getUserSubscriptions(username),
        getUserFollowers(username)
    ]).catch(webApi.handleAjaxError);

    console.log(user);
    return [userChirps, userChirps.length, user[0].subscriptions.length, userFollowers.length];
}