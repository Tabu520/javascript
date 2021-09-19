const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const { Category } = require("../models/category");

router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();
    if (!categoryList) {
        res.status(500).json({ success: false });
    }
    res.status(200).send(categoryList);
});

router.get(`/:id`, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(500).json({ message: "Invalid Category ID" });
    }
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(500).json({
            success: false,
            message: "The category with given ID was not found!",
        });
    }
    res.status(200).send(category);
});

router.post(`/`, async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    });

    category = await category.save();
    if (!category) {
        return res.status(404).send("The category could not be created!");
    }
    res.send(category);
});

router.put(`/:id`, (req, res) => {
    Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        },
        {
            new: true,
        }
    )
        .then((category) => {
            if (category) {
                return res
                    .status(200)
                    .json({ success: true, message: "The selected category is updated!" });
            } else {
                return res.status(404).json({ success: false, message: "category not found" });
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err });
        });
});

router.delete(`/:id`, (req, res) => {
    Category.findByIdAndRemove(req.params.id)
        .then((category) => {
            if (category) {
                return res
                    .status(200)
                    .json({ success: true, message: "The selected category is deleted!" });
            } else {
                return res.status(404).json({ success: false, message: "category not found" });
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err });
        });
});

module.exports = router;
