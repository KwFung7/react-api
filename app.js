const express = require('express');
const fs = require('fs')
const { Portfolio } = require('./model')
// const portfolioExample = require('./example/portfolioExample');


/** ============================================================= *
  * Middleware
  * ============================================================= */
let app = express();
app.use((req, res, next) => {
  // for server log
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', `${log}\n`, err => {
    console.log('Unable to append server.log');
  });
  next();
});
// app.use('/', express.static(`${__dirname}/client/build`));


/** ============================================================= *
  * Request
  * ============================================================= */
app.get('/api/v1/hello', (req, res) => {
  res.send({ testingText: 'Testing api !'});
});

/*
let testPortfolio = new Portfolio(portfolioExample);
testPortfolio.save().then(() => {
  console.log('Saved Portfolio.');
}, (err) => {
  console.log(err);
});
*/

module.exports = app;