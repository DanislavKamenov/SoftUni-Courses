function getAllPosts() {
    let query = '?query={}&sort={"_kmd.ect": -1}';
    return webApi.get('user', 'appdata', 'posts' + query);
}

function getUserPosts(username) {
    let query = `?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;
    return webApi.get('user', 'appdata', 'posts' + query);
}

function getPost(id) {
    return webApi.get('user', 'appdata', 'posts/' + id);
}

async function getPostAndComments(id) {
    let query = `?query={"postId":"${id}"}&sort={"_kmd.ect": -1}`;
    return await Promise.all([
        getPost(id),
        webApi.get('user', 'appdata', 'comments' + query)
        ]);
}

async function deletePostAndComments(postId) {
    let query = `?query={"postId":"${postId}"}`;
    return await Promise.all([
        deletePost(postId),
        webApi.remove('user', 'appdata', 'comments/' + query),
    ]);
}

function createPost(data) {
    return webApi.post('user', data, 'appdata', 'posts');
}

function editPost(id, data) {
    return webApi.update('user', data, 'appdata', 'posts/' + id);
}

function deletePost(id) {
    return webApi.remove('user', 'appdata', 'posts/' + id);
}

function createComment(data) {
    return webApi.post('user', data, 'appdata', 'comments');
}

function deleteComment(id) {
    return webApi.remove('user', 'appdata', 'comments/' + id);
}