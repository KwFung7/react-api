const express = require('express');
const { V1_ROUTE } = require('../../constants');

/** ============================================================= *
  * Routes
  * ============================================================= */
const settingRouter = require('./settingRouter');
const portfolioRouter = require('./portfolioRouter');
const userRouter = require('./userRouter');
const logRouter = require('./logRouter');

let v1Router = express.Router();
v1Router.use(V1_ROUTE, settingRouter);
v1Router.use(V1_ROUTE, portfolioRouter);
v1Router.use(V1_ROUTE, userRouter);
v1Router.use(V1_ROUTE, logRouter);

module.exports = v1Router;