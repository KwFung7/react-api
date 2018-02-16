const express = require('express');
let v1Router = express.Router();

/** ============================================================= *
  * Routes
  * ============================================================= */
const settingRouter = require('./settingRouter');
const portfolioRouter = require('./portfolioRouter');
const V1_ROUTE = '/v1';

v1Router.use(V1_ROUTE, settingRouter);
v1Router.use(V1_ROUTE, portfolioRouter);

module.exports = v1Router;