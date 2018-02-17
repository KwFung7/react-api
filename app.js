const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const ApiRouter = require('./server/routers');

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
app.use('/', ApiRouter);


module.exports = app;