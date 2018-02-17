const express = require('express');
const { API_ROUTE } = require('../constants');
const v1Router = require('./v1');

let ApiRouter = express.Router();
ApiRouter.use('/', express.static(`${__dirname}/../../client/build`));
ApiRouter.use(API_ROUTE, v1Router);

module.exports = ApiRouter;