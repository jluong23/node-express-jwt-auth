const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes =  require("./routes/authRoutes")
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = "user_authentication_jwt";
const dbURI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@nodetest.ycbuew5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    console.log("connected to DB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);