const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const ApiRouter = require('./routers');

let app = express();
app.use(cors({ exposedHeaders: 'x-auth', allowedHeaders: 'x-auth' }));
app.use(bodyParser.json());
// app.use(logger);
app.use('/', ApiRouter);


module.exports = app;
