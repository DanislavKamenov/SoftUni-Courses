let crud = (() => {

    function getActiveReceipt(userId) {
        let query = `?query={"_acl.creator":"${userId}","active":true}`;
        return webApi.get('user', 'appdata', 'receipts' + query)
    }

    function createReceipt() {
        let data = {
            "active": true,
            "productCount": 0,
            "total": 0
        };

        return webApi.post('user', data, 'appdata', 'receipts');
    }

    async function initializeReceipt(userId) {
        let receiptArr = await getActiveReceipt(userId);
        let receipt = receiptArr[0];

        if (receipt === undefined) {
            receipt = await createReceipt();
        }

        return receipt;
    }

    function addEntry(entry) {
        return webApi.post('user', entry, 'appdata', 'entries');
    }

    function getEntriesById(receiptId) {
        let query = `?query={"receiptId":"${receiptId}"}`;
        return webApi.get('user', 'appdata', 'entries' + query);
    }

    function removeEntry(entryId) {
        return webApi.remove('user', 'appdata', 'entries', entryId);
    }
    
    function commitReceipt(receiptId, data) {
        return webApi.update('user', data, 'appdata', 'receipts/' + receiptId);
    }
    
    function getUserReceipts(userId) {
        let query = `?query={"_acl.creator":"${userId}","active":false}`;
        return webApi.get('user', 'appdata', 'receipts' + query);
    }

    return {
        initializeReceipt,
        addEntry,
        getEntriesById,
        removeEntry,
        commitReceipt,
        getUserReceipts,
    }
})();