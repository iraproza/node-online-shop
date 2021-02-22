// const {get404, getHomePage, getBlogPage, getCartPage, getCategoryPage, getContactPage, getCheckoutPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleBlogPage, getSingleProductPage, getTrackingOrderPage, getNewProductPage} = require("../controllers/shopController")

const shopController = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

router.get("/", shopController.getHomePage);
router.get("/blog", shopController.getBlogPage);
router.get("/contact", shopController.getContactPage);
router.get("/cart", shopController.getCartPage);
router.get("/category", shopController.getCategoryPage);
router.get("/checkout", shopController.getCheckoutPage);
router.get("/confirmation", shopController.getConfirmationPage);
router.get("/login", shopController.getLoginPage);
router.get("/register", shopController.getRegisterPage);
router.get("/single-blog", shopController.getSingleBlogPage);
router.get("/products/:id", shopController.getSingleProductPage);
router.get("/products:id", shopController.deleteProduct);
router.get("/tracking-order", shopController.getTrackingOrderPage);
router.get("/add-product", shopController.getNewProductPage);
router.post("/add-product",shopController.postNewsProductPage);
router.get("/edit-product/:id", shopController.editProductPage);
router.post("/edit-product/:id", shopController.editProduct);
router.get("/*", shopController.get404);


module.exports = router;