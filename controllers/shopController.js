const Product = require("../models/product");

exports.getBlogPage = (req, res, next) => {
    res.render("pages/blog")
}

exports.getCartPage = (req, res, next) => {
    res.render("pages/cart")
}

exports.getCategoryPage = (req, res, next) => {
    Product.findAll()
    .then((products) => {
        res.render("pages/category",{
            products: products,
        });
    })
    .catch(err => console.log(err));
}

exports.getCheckoutPage = (req, res, next) => {
    res.render("pages/checkout")
}

exports.getConfirmationPage = (req, res, next) => {
    res.render("pages/confirmation")
}

exports.getContactPage = (req, res, next) => {
    res.render("pages/contact")
}

exports.getHomePage = (req, res, next) => {
    res.render("pages/index")
}

exports.getLoginPage = (req, res, next) => {
    res.render("pages/login")
}

exports.getRegisterPage = (req, res, next) => {
    res.render("pages/register")
}

exports.getSingleBlogPage = (req, res, next) => {
    res.render("pages/single-blog")
}

exports.getSingleProductPage = (req, res, next) => {
    const productId = req.params.id;
    Product.findByPk(productId)
    .then((product) => {
        res.render("pages/single-product",{
            product: product,
        });
    })
    .catch(err => console.log(err));
}

exports.getTrackingOrderPage = (req, res, next) => {
    res.render("pages/tracking-order")
}

exports.get404 = (req, res, next) => {
    res.status(404).render("pages/404.ejs")
}