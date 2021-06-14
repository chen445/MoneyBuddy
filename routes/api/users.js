const express = require("express");
const router = express.Router();
// const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');
const passport = require('passport')

router.get("/test", (_req, res) => res.json({ msg: "Success" }));

module.exports = router;