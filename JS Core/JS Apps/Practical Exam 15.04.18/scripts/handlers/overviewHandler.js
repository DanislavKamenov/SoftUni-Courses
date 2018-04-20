HANDLERS.getOverview = (ctx) => {
    let userId = sessionStorage.getItem('userId');
    crud.getUserReceipts(userId)
        .then((receipts) => {
            receipts.map(receipt => receipt.dateCreated = helpers.formatDate(receipt._kmd.ect));

            let partials = helpers.getCommonPartials();
            partials.receipt = './templates/receipt/partials/receipt.hbs';
            ctx = helpers.getCommonContext(ctx);
            ctx.receipts = receipts;

            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/receipt/allReceipts.hbs');
                })
        })
        .catch(webApi.handleAjaxError);

};

HANDLERS.getDetails = (ctx) => {
    let receiptId = ctx.params.id.substr(1);

    crud.getEntriesById(receiptId)
        .then((entries) => {
            entries.forEach(entry => entry.subTotal = entry.qty * entry.price);

            let partials = helpers.getCommonPartials();
            partials.entry = './templates/receipt/partials/entry.hbs';
            ctx = helpers.getCommonContext(ctx);
            ctx.entries = entries;

            ctx.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/receipt/receiptDetails.hbs');
                })
        })
        .catch(webApi.handleAjaxError);
};