let myCart = {};
HANDLERS.getCart = (ctx) => {
    crud.getUser(sessionStorage.getItem('userId'))
        .then((user) => {
            myCart = user.cart;
            let items = [];
            for (let entry in user.cart) {
                console.log(entry);
                let quantity = user['cart'][entry]['quantity'];
                let product = user['cart'][entry]['product'];
                let productPrice = user['cart'][entry]['product']['price'];
                let item = product;
                item['quantity'] = quantity;
                item['totalPrice'] = (Number(productPrice) * Number(quantity)).toFixed(2);
                item['id'] = entry;
                items.push(item);
            }
            console.log(items);
            let partials = helpers.getCommonPartials();
            partials.item = './templates/cart/item.hbs';
            ctx = helpers.getCommonContext(ctx);
            ctx.items = items;
            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/cart/cart.hbs');
                });
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.discard = (ctx) => {
  let id = ctx.params.id.substr(1);
  delete myCart[id];
  let data = {
      name: sessionStorage.getItem('name'),
      cart: myCart,
  };
  crud.updateUserCart(sessionStorage.getItem('userId'), data)
      .then(() => {
          notify.showInfo('Discard successful!');
          ctx.redirect('#/cart');
      })
      .catch(webApi.handleAjaxError);
};