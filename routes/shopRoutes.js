const {get404, getHomePage, getBlogPage, getCartPage, getCategoryPage, getContactPage, getCheckoutPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleBlogPage, getSingleProductPage, getTrackingOrderPage, getNewProductPage} = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/blog", getBlogPage);
router.get("/contact", getContactPage);
router.get("/cart", getCartPage);
router.get("/category", getCategoryPage);
router.get("/checkout", getCheckoutPage);
router.get("/confirmation", getConfirmationPage);
router.get("/login", getLoginPage);
router.get("/register", getRegisterPage);
router.get("/single-blog", getSingleBlogPage);
router.get("/products/:id", getSingleProductPage);
router.get("/tracking-order", getTrackingOrderPage);
router.get("/add-product", getNewProductPage);
router.get("/*", get404);


module.exports = router;