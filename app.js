const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const categories = require('./routes/api/categories')
const User = require('./models/User')
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to MongoDB successfully"))
    .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// app.use(bodyParser.urlencoded({entended: false}));
// app.use(bodyParser.json())

app.use(passport.initialize());
require("./config/passport")(passport)

app.use("/api/users", users)
app.use("/api/categories", categories)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const db = require("./config/keys").mongoURI;

// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello World"));
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));
