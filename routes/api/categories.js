const express = require("express");
const router = express.Router();
const  mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Category = require('../../models/Category');
const validateCategoryInput = require('../../validation/category');

router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newCategory = new Category({
        name: req.body.name
    })

    newCategory
        .save()
        .then(category => res.json(category))
})

module.exports = router