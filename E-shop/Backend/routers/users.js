const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

router.get(`/`, async (req, res) => {
    const userList = await User.find().select("-passwordHash");
    if (!userList) {
        res.status(500).json({ success: false });
    }
    res.status(200).send(userList);
});

router.get(`/:id`, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(500).json({ message: "Invalid User ID" });
    }
    const user = await User.findById(req.params.id).select("-passwordHash");
    if (!user) {
        res.status(500).json({
            success: false,
            message: "The user with given ID was not found!",
        });
    }
    res.status(200).send(user);
});

router.get(`/get/count`, async (req, res) => {
    let userCount = await User.countDocuments();
    if (!userCount) {
        res.status(500).json({ success: false });
    }
    res.send({
        userCount: userCount,
    });
});

router.post(`/`, async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    });
    user = await user.save();

    if (!user) return res.status(400).send("the user cannot be created!");

    res.send(user);
});

router.post(`/login`, async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    const secret = process.env.SECRET;
    if (!user) {
        return res.status(400).send("The user not found!");
    }

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            { expiresIn: "1d" }
        );
        return res.status(200).send({ user: user.email, token: token });
    } else {
        return res.status(400).send("Username or password is wrong!");
    }
});

router.post(`/register`, async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country
    })
    user = await user.save();

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})

router.delete(`/:id`, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(500).json({ message: "Invalid User ID" });
    }
    let user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
        res.status(500).json({
            success: false,
            message: "The user with given ID was not found!",
        });
    }
    res.status(200).send(user);
});

module.exports = router;
