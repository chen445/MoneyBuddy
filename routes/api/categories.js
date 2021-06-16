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
                if (category.length !== 0) {
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
                        .then(category => res.json(category))
                }
            })
})

router.get('/',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Category.find({user: req.user.id})
            .then(categories => res.json(categories))
    }
)

router.delete('/delete',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const filter = ({user: req.user.id}, {name: req.body.name})
        Category.findOneAndDelete(filter)
            .then(() => res.json("Delete Successfully!"))
    }
)

router.patch('/update',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        if (req.body.changename) {
            if (1 < req.body.changename.length < 31) {
                console.log("OJBK")
            } else {
                return res.json('Category name must be between 2 and 20 letters!')
            }
        } 
        console.log({name: req.body.id})

        Category.findById(req.body.id)
            .then(category => {
                let update = {}
                if (req.body.changename) update.name = req.body.changename;
                if (req.body.changeicon) update.icon = req.body.changeicon;
                console.log(update)
                Category.findByIdAndUpdate(category.id, update, { new: true })
                    .then(doc => {
                        console.log(doc)
                        const payload = {
                            name: doc.name,
                            icon: doc.icon
                        }
                        return res.json(payload)
                    })
            })
            .catch(err => {
                console.log('errors')
                return res.status(404).json(err)
            })
    }
)

module.exports = router