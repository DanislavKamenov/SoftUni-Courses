const Product = require('../models/product');
const Category = require('../models/category');
const fs = require('fs');

module.exports = {
    addGet: (req, res) => {
        Category.find()
            .then((categories) => {
                let data = {categories};            
                res.render('products/add', data);  
            }).catch((err) => {
                console.log(err);
            });         
    },

    addPost: (req, res) => {
        let productObj = req.body;
        productObj.image = '\\' + req.file.path;
        productObj.creator = req.user._id;

        Product.create(productObj).then((product) => {
            Category.update({_id: product.category}, {$push: { products: product._id }}).exec();
            res.redirect('/');
        });        
    },

    editGet: (req, res) => {
        let id = req.params.id;
        Product.findOne({_id: id, buyer: null}).then((product) => {
            if (!product) {
                res.sendStatus(404);
                return;
            }

            if (product.creator.equals(req.user._id) || req.user.roles.indexOf('Admin') >= 0) {
                Category.find().then((categories) => {
                    let data = {
                        product,
                        categories
                    };
                    res.render('products/edit', data);
                });
            } else {                
                res.redirect(`/?error=${encodeURIComponent('You must be author or Admin to edit this product')}`);

            }
        });
    },

    editPost: (req, res) => {
        let id = req.params.id;
        let editedProduct = req.body;

        Product.findOne({_id: id, buyer: null}).then((product) => {
            if (!product) {
                return res.redirect(`/?error=${encodeURIComponent('error=Product was not found!')}`);                
            }

            if (product.creator.equals(req.user._id) || req.user.roles.indexOf('Admin') >= 0) {
                product.name = editedProduct.name;
                product.description = editedProduct.description;
                product.price = editedProduct.price;
    
                if (req.file) {
                    product.image = '\\' + req.file.path;
                }
    
                if (product.category.toString() !== editedProduct.category) {
                    Promise.all([
                        Category.update({_id: product.category}, {$pull: {products: product._id}}),
                        Category.update({_id: editedProduct.category}, {$push: {products: product._id}})
                    ]).then(() => {
                        product.category = editedProduct.category;
                        product.save();
                        res.redirect(`/?success=${encodeURIComponent('Product was edited successfully!')}`);
                    }).catch(() => {
                        res.redirect(`/?error=${encodeURIComponent('error=Product was not edited!')}`);
                    });           
                } else {
                    res.redirect(`/?success=${encodeURIComponent('Product was edited successfully!')}`);
                    product.save();
                }
            } else {
                res.redirect(`/?error=${encodeURIComponent('You must be author or Admin to edit this product')}`);
            }
        });
    },
    
    deleteGet: (req, res) => {
        let id = req.params.id;

        Product.findOne({_id: id, buyer: null}).then((product) => {
            if (!product) {
                res.sendStatus(404);
                return;
            }

            if (product.creator.equals(req.user._id) || req.user.roles.indexOf('Admin') >= 0) {
                Category.find().then((categories) => {
                    let data = {
                        product,
                        categories
                    };
                    res.render('products/delete', data);
                });
            } else {
                res.redirect(`/?error=${encodeURIComponent('You must be author or Admin to delete this product')}`);
            }
            
        }).catch((err) => {
            console.log(err);
            res.sendStatus(404);
        });
    },

    deletePost: (req, res) => {
        let id = req.params.id;

        Product.findOneAndRemove({_id: id, buyer: null}).then((product) => {
            if (product.creator.equals(req.user._id) || req.user.roles.indexOf('Admin') >= 0) {
                Category.update({_id: product.category}, {$pull: { products: product._id }}).then(() => {
                    fs.unlinkSync('.' + product.image);
                    res.redirect(`/?success=${encodeURIComponent('Product was deleted successfully!')}`);
                }).catch(() => {
                    res.redirect(`/?success=${encodeURIComponent('Product was deleted but category reference was not!')}`);
                });
            } else {
                res.redirect(`/?error=${encodeURIComponent('You must be author or Admin to delete this product')}`);
            }
            
        }).catch((err) => {
            console.log(err);
            res.sendStatus(404);
        });
    },

    buyGet: (req, res) => {
        let id = req.params.id;

        Product.findOne({_id: id, buyer: null}).then((product) => {
            if (!product) {
                res.sendStatus(404);
                return;
            }

            let data = {product};
            res.render('products/buy', data);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(404);
        });
    },

    buyPost: (req, res) => {
        let id = req.params.id;

        Product.findOne({_id: id, buyer: null}).then(product => {
            if (product.buyer) {
                let error = `error=${encodeURIComponent('Product was already bought!')}`;
                return res.redirect(`/?${error}`);
            }

            product.buyer = req.user._id;
            product.save().then(() => {
                req.user.boughtProducts.push(id);
                req.user.save().then(() => {
                    res.redirect('/');
                });
            });
        });
    }
};