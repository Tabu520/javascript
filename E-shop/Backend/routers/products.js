const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Product } = require("../models/product");
const { Category } = require("../models/category");

router.get(`/`, async (req, res) => {
    // localhost:3000/api/v1/products?categories=8623852835,73485634
    let filter = {};
    if (req.query.categories) {
        filter = {category: req.query.categories.split(",")};
    }
    let productList = await Product.find(filter).populate("category");
    if (!productList) {
        res.status(500).json({ success: false });
    }
    res.send(productList);
});

router.get(`/:id`, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(500).json({ message: "Invalid Product ID" });
    }
    let product = await Product.findById(req.params.id).select("name");
    if (!product) {
        res.status(500).json({ success: false });
    }
    res.send(product);
});

router.get(`/get/count`, async (req, res) => {
    let productCount = await Product.countDocuments();
    if (!productCount) {
        res.status(500).json({ success: false });
    }
    res.send({
        productCount: productCount,
    });
});

router.get(`/get/featured/:count`, async (req, res) => {
    const count = req.params.count ? req.params.count : 0;
    let products = await Product.find({isFeatured: true}).limit(+count);
    if (!products) {
        res.status(500).json({ success: false });
    }
    res.send(products);
});

router.post(`/`, async (req, res) => {
    let category = await Category.findById(req.body.category);
    if (!category) {
        return res.status(400).send("Invalid category");
    }

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    });

    product = await product.save();
    if (!product) {
        return res.status(500).send("The product could not be created!");
    }
    res.send(product);
});

router.put(`/:id`, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(500).json({ message: "Invalid Product ID" });
    }
    let category = await Category.findById(req.body.category);
    if (!category) {
        return res.status(400).send("Invalid category");
    }

    let product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        },
        {
            new: true,
        }
    );
    if (!product) {
        return res.status(400).send("The product could not be updated!");
    }
    res.send(product);
});

router.delete(`/:id`, (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(500).json({ message: "Invalid Product ID" });
    }
    Product.findByIdAndRemove(req.params.id)
        .then((product) => {
            if (product) {
                return res
                    .status(200)
                    .json({ success: true, message: "The selected product is deleted!" });
            } else {
                return res.status(404).json({ success: false, message: "product not found" });
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err });
        });
});

module.exports = router;
