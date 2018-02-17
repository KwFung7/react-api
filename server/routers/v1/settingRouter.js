const express = require('express');
const cors = require('cors');
const { Setting } = require('../../models');
const { SETTING_ROUTE, OK, BAD_REQUEST } = require('../../constants');

let router = express.Router();
router.get(SETTING_ROUTE, cors(), (req, res) => {
  Setting.find()
    .then((settings) => {
      res.status(OK).send(settings);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
})

module.exports = router;