const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { Portfolio } = require('./server/models');

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
app.get('/api/v1/hello', (req, res) => {
  res.send({ testingText: 'Testing api !'});
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