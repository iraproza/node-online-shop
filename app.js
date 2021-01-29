const express = require("express");

const path = require("path")
const shopRoutes = require("./routes/shopRoutes");

const PORT = 8000;
const app = express(); 

app.use(shopRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))