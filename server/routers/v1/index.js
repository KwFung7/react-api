const express = require('express');
const { V1_ROUTE } = require('../../constants');

/** ============================================================= *
  * Routes
  * ============================================================= */
const settingRouter = require('./settingRouter');
const portfolioRouter = require('./portfolioRouter');

let v1Router = express.Router();
v1Router.use(V1_ROUTE, settingRouter);
v1Router.use(V1_ROUTE, portfolioRouter);

module.exports = v1Router;