const Category = require('../models/category');

module.exports = {
    addGet: (req, res) => {
        res.render('category/add');
    },

    addPost: (req, res) => {      
        let category = req.body;
        category.creator = req.user._id;
        Category.create(category).then(() => {
            res.redirect('/');
        }).catch((err) => {
            console.warn(err);
        });
    },

    productByCategory: (req, res) => {
        let categoryName = req.params.category;

        Category.findOne({name: categoryName})
            .populate('products')
            .then((category) => {
                if (!category) {
                    res.sendStatus(404);
                    return;
                }
                
                let data = {category};
                res.render('category/products', data);
            });
    }
};