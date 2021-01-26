const express = require("express"); // підключення веб-сервера

// Include shop routes
const shopRoutes = require("./routes/shopRoutes");

const PORT = 8000;
const app = express(); // об*єкт сервера - приходить запит від сервера


// Use Midelwer
app.use(shopRoutes);

// app.use("/", (req, res, next) =>{ // запит тільки на головну
//     // console.log("Request =>", req)
//     res.send("<h1>Home page</h1>") // дати відповідь
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) // слухати сервер