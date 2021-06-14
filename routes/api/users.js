const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const passport = require('passport')

router.get("/test", (_req, res) => res.json({ msg: "Success" }));

router.get("/current", passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    })
})

router.post("/signup", (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username })
        .then(user => {
            if(user) {
                errors.username = "Sorry! Username has been taken!"
                return res.status(400).json(errors);
            } else {
                User.findOne({ email: req.body.email })
                    .then(user => {
                        if (user) {
                            errors.email = "Email has been used!";
                            return res.status(400).json(errors);
                        } else {
                            const newUser = new User({
                                username: req.body.username,
                                email: req.body.email,
                                password: req.body.password
                            });

                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if (err) throw err;
                                    newUser.password = hash;
                                    newUser
                                        .save()
                                        .then(user => {
                                            const payload = {id: user.id, username: user.username};

                                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                                res.json({
                                                    success: true,
                                                    token: "Bearer " + token
                                                })
                                            })
                                        })
                                        .catch(err => console.log(err))
                                })
                            })
                        }
                    })
            }
        })

})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if(!user) {
                errors.email = 'User not found';
                return res.status(400).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const today = new Date();
                        if (user.rewarddate.getDate() !== today.getDate()) {
                            const filter = { email: user.email};
                            const point = { point: user.point + 1};
                            const date = { rewarddate: Date.now }
                            User.findOneAndUpdate(filter, point)
                                // .save()
                            User.findOneAndUpdate(filter, date)
                                // .save()
                        }

                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            icons: user.icons,
                            categories: user.categories,
                            point: user.point
                        }
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 },(err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer" + token
                            })
                        })
                    } else {
                        errors.password = "Incorrect password";
                        return res.status(400).json(errors)
                    }
                })
        })
})

module.exports = router;