const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const ApiRouter = require('./routers');

let app = express();
app.use(cors({ exposedHeaders: 'Authorization' }));
app.use(bodyParser.json());
// app.use(logger);
app.use('/', ApiRouter);


module.exports = app;
