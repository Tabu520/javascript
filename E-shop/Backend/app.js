const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));

require("dotenv/config");
const api = process.env.API_URL;

// Model
const Product = require('./models/product');

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

app.get(`${api}/products`, async (req, res) => {
    const productList = await Product.find();
    if (!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList);
});

app.post(`${api}/products`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    });

    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    }))
    .catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    });
});
