const Product = require('../models/product');

module.exports = {
    index: (req, res) => {
        let queryData = req.query;

        Product.find({buyer: null}).populate('category').then((products) => {
            if (queryData.query) {
                products = products.filter(p => p.name.toLowerCase().includes(queryData.query));        
            }

            let data = {products};
            if (queryData.error) {
                data.error = queryData.error;
            } else {
                data.success = queryData.success;
            }
            res.render('home/index', data);
        }).catch((err) => {
            console.warn(err);
        });
    }    
};