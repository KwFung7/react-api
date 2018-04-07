const express = require('express');
const fs = require('fs');
const authenticate = require('../../middlewares/authenticate');
const { LOG_ROUTE, BAD_REQUEST, OK } = require('../../constants');

let router = express.Router();

/* GET ===================================== */
router.get(LOG_ROUTE, authenticate, (req, res) => {
  fs.readFile('server.log', (err, data) => {
    if (err) {
      console.error('Unable to read server log.');
      res.status(BAD_REQUEST).send(err);
    }
    res.status(OK).send(data);
  });
})

module.exports = router;