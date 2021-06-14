const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const User = require('./models/User')
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// app.use(bodyParser.urlencoded({entended: false}));
// app.use(bodyParser.json())

app.use("/api/users", users)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));