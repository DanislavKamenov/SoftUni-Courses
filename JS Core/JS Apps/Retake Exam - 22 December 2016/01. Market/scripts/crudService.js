let crud = (() => {
    function getAllProducts () {
        return webApi.get('user', 'appdata', 'products');
    }

    function getSingleProduct(id) {
        let query = `?query={"_id": "${id}"}`;
        return webApi.get('user', 'appdata', 'products' + query);
    }

    function updateUserCart(userId, data) {
        return webApi.update('user', data, 'user', userId);
    }
    
    function getUser(userId) {
        return webApi.get('user', 'user', userId);
    }

    function getProductAndUser(id, userId) {
        return Promise.all([getSingleProduct(id), getUser(userId)]);
    }
    return {
        getAllProducts,
        updateUserCart,
        getUser,
        getProductAndUser,
    }
})();