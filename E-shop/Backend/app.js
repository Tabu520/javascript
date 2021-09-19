const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.options("*", cors);

require("dotenv/config");
const api = process.env.API_URL;

// Routers
const productRouter = require("./routers/products");
const categoryRouter = require("./routers/categories");

// Middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoryRouter);

mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Database Connection is ready...");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log(api);
    console.log("server is running http://localhost:3000");
});
