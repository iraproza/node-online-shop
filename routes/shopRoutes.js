const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) =>{
    res.send("<h1>Home page</h1>")
});

router.get("/about", (req, res, next) =>{
    res.send("<h1>About page</h1>")
});

router.get("/vacancies", (req, res, next) =>{
    res.send("<h1>Vacancies</h1>")
});

router.get("/careers", (req, res, next) =>{
    res.send("<h1>Careers</h1>")
});

module.exports = router;