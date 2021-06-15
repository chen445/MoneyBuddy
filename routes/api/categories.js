const express = require("express");
const router = express.Router();
const  mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require('../../models/User')
const Category = require('../../models/Category');
const validateCategoryInput = require('../../validation/category');

router.post('/create', 
    passport.authenticate("jwt", { session: false }), 
    (req, res) => {

        const { errors, isValid } = validateCategoryInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Category.find({name: req.body.name}).find({user: req.user.id})
            .then(category => {
                if (category) {
                    errors.name = "You already have this category!"
                    return res.status(400).json(errors)
                } else {
                    const newCategory = new Category({
                        user: req.user.id,
                        name: req.body.name,
                        icon: req.body.icon,
                    })

                    newCategory
                        .save()
                        .then(category => {
                            User.findById(category.user)
                                .then(user => {
                                    let update = {};
                                    update.categories = user.categories.concat(category.id)
                                    User.findByIdAndUpdate(category.user, update, (err, updateData) => {
                                                        if (err) {
                                                            // console.log(err);
                                                        } else {
                                                            // console.log(updateData);
                                                        }
                                    })
                                })
                            return res.json(category)
                        })
                }
            })
})

module.exports = router