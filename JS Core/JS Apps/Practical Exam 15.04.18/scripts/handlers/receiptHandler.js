HANDLERS.getEditor = async (ctx) => {
    let userId = sessionStorage.getItem('userId');
    let receipt = await crud.initializeReceipt(userId);
    let entries = await crud.getEntriesById(receipt._id);

    let total = 0;
    entries.forEach(entry => {
        entry.subTotal = entry.qty * entry.price;
        total += entry.subTotal;
        entry.isInEdit = true;
    });
    entries.total = total;

    let partials = helpers.getCommonPartials();
    partials.entry = './templates/receipt/partials/entry.hbs';
    ctx = helpers.getCommonContext(ctx);
    ctx.entries = entries;
    ctx.receiptId = receipt._id;

    ctx.loadPartials(partials)
        .then(function () {
            this.partial('./templates/receipt/createReceipt.hbs');
        });
};

HANDLERS.addEntry = (ctx) => {
    let type = ctx.params.type;
    let qty = Number(ctx.params.qty);
    let price = Number(ctx.params.price);
    let receiptId = ctx.params.receiptId;

    if (helpers.entryIsValid(type, qty, price)) {
        let entry = {type, qty, price, receiptId};
        crud.addEntry(entry)
            .then(() => {
                notify.showInfo('Entry added!');
                ctx.redirect('#/editor');
            })
    }
};

HANDLERS.removeEntry = (ctx) => {
    let entryId = ctx.params.id.substr(1);
    crud.removeEntry(entryId)
        .then(() => {
            notify.showInfo('Entry removed!');
            ctx.redirect('#/editor');
        })
        .catch(webApi.handleAjaxError);
};

HANDLERS.checkout = (ctx) => {
    let receiptId = ctx.params.receiptId;
    let total = Number(ctx.params.total);

    crud.getEntriesById(receiptId)
        .then((entries) => {
            if (entries.length === 0) {
                notify.showError('Checkout of empty receipt is not allowed!')
            } else {
                let receipt = {
                    active: false,
                    productCount: entries.length,
                    total: total
                };

                crud.commitReceipt(receiptId, receipt)
                    .then(() => {
                        notify.showInfo('Receipt checked out!');
                        ctx.redirect('#/editor');
                    })
                    .catch(webApi.handleAjaxError)
            }
        })
        .catch(webApi.handleAjaxError);
};