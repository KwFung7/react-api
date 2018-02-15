const express = require('express');
const { Portfolio } = require('./model')
// const portfolioExample = require('./example/portfolioExample');
let app = express();

/** ============================================================= *
  * Request
  * ============================================================= */
// app.use('/', express.static(`${__dirname}/client/build`));
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