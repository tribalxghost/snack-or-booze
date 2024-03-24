/** Application for bank.ly */

const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");


app.use(express.json());

// ERROR #1 Needs to bodyparser

app.use(express.urlencoded({extended:true}))

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);


/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    status: err.status,
    message: err.message
  });
});


// ERROR #2 repeated code - commenting one out
// module.exports = app;

module.exports = app;
