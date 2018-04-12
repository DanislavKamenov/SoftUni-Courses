HANDLERS.getShop = (ctx) => {
    crud.getAllProducts()
        .then((products) => {
            let partials = helpers.getCommonPartials();
            partials.product = './templates/shop/product.hbs';
            ctx = helpers.getCommonContext(ctx);
            products.map(pr => pr.price = pr.price.toFixed(2));
            ctx.products = products;
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/shop/shop.hbs');
                })
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.postShop =(ctx) => {
    let id = ctx.params.id.substr(1);
    crud.getProductAndUser(id, sessionStorage.getItem('userId'))
        .then(([product, user]) => {
            console.log(product);
            console.log(user);

            let cart = user.cart;
            let cartItem = {quantity: 1,
                product:{
                description: product[0].description,
                name: product[0].name,
                price: product[0].price,
            }};
            if (cart === undefined) {
                cart = {};
                cart[product[0]._id] = cartItem;
            } else {
                if (cart.hasOwnProperty(product[0]._id)) {
                    cart[product[0]._id].quantity++;
                    cart[product[0]._id].product = cartItem.product;
                } else {
                    cart[product[0]._id] = cartItem;
                }
            }
            let data = {
                name: sessionStorage.getItem('name'),
                cart,
            };

            crud.updateUserCart(sessionStorage.getItem('userId'), data)
                .then(() => {
                    notify.showInfo('Product added to cart!');
                })
                .catch(webApi.handleAjaxError);
        })
};