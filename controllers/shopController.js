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

exports.getNewProductPage = (req, res, next) => {
    res.render("pages/addNewProduct.ejs")
}

exports.postNewsProductPage = (req, res, next) =>{
    const title = req.body.title;
    const category = req.body.category;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;

    Product.create({
        title: title,
        category: category,
        price: price,
        image: image,
        description: description
    })
    .then((result) => {
        console.log("Product create")
        return res.redirect("/category")
    })
    .catch(err => console.log(err));
}

exports.deleteProduct = (req, res,  next) =>{
    console.log('Delete Course');
    const id = req.params.id;
    Product.destroy(
        {
            where: {
                id: id
            }
        }
    )
    .then((product) => {
        return res.redirect("/category");
    })
    .catch(err => console.log(err));
}

exports.editProductPage = (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then((product) => {
            res.render("pages/edit-product", {
                product: product
            });
        })
        .catch((err) => console.log(err));
};

exports.editProduct = (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const category = req.body.category;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    const product = {
        title: title,
        category: category,
        price: price,
        image: image,
        description: description
    }

    Product.update( product,
    {
        where: {
            id: id
        }
    })
    .then((result) => {
        res.redirect(`/products/${id}`);
    })
    .catch(err => console.log(err));
}

exports.get404 = (req, res, next) => {
    res.status(404).render("pages/404.ejs")
}