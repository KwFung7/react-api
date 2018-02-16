const express = require('express');
const v1Router = require('./v1');

let ApiRouter = express.Router();
ApiRouter.use('/api', v1Router);

module.exports = ApiRouter;