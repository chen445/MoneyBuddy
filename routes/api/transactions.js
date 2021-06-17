const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const Category = require('../../models/Category');
const Transaction = require('../../models/Transaction');
const validateCategoryInput = require('../../validation/transaction');

router.get('/',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {

        Transaction.find({ user: req.user.id })
            .then(transactions => {
                console.log(transactions)
                return res.json(transactions)
            })
            .catch(err => res.json(err))

    }
)

router.post('/create',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {

        const { errors, isValid } = validateCategoryInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Category.find({user: req.user.id}).find({name: req.body.category})
            .then(category => {
                const newTransaction = new Transaction({
                    user: req.user.id,
                    category: category[0].id,
                    amount: req.body.amount,
                    type: req.body.type,
                    description: req.body.description,
                    date: req.body.date
                })

                newTransaction
                    .save()
                    .then(transaction => res.json(transaction))
            })
            .catch(err => res.json('Category not exist'))
    }
)

module.exports = router