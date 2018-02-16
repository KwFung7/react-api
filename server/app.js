const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const _ = require('lodash');
const { Portfolio, Setting } = require('./models');

/** ============================================================= *
  * Middleware
  * ============================================================= */
let app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  // for server log
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', `${log}\n`, err => {
    if (err) {
      console.error('Unable to append server log.');
      return;
    }
    console.log('Record was appended to server log.');
  });
  next();
});
// app.use('/', express.static(`${__dirname}/client/build`));


/** ============================================================= *
  * Request
  * ============================================================= */
app.get('/api/v1/portfolio', (req, res) => {
  // fetch system setting and selected portfolio id
  Setting.find().then((settings) => {
    const selectedPortfolioId = _.head(settings).selected_portfolio

    // find selected portfolio with id
    Portfolio.findById(selectedPortfolioId).then((portfolios) => {
      res.status('200').send(portfolios);
    }, (err) => {
      res.status('400').send(err);
    })
  }, (err) => {
    res.status('400').send(err);
  })
});

app.post('/api/v1/portfolio', (req, res) => {
  let portfolio = new Portfolio(req.body);
  portfolio.save().then(() => {
    res.status('200').send('Saved new portfolio.');
  }, (err) => {
    res.status('400').send(err);
  });
})

module.exports = app;