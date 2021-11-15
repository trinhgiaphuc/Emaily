const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys');
const authRouter = require('./routes/auth.router');
require('./models/User');
require('../services/passport');

const app = express();

mongoose.connect(keys.mongoURI);

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter);

module.exports = app;
