const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Setting } = require('../../models');
const { SETTING_ROUTE, OK, BAD_REQUEST, ENABLED_UPDATE_SETTING } = require('../../constants');

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

router.patch(`${SETTING_ROUTE}/:id`, (req, res) => {
  const id = req.params.id;
  // only allow specific field for update
  const body = _.pick(req.body, ENABLED_UPDATE_SETTING);

  if (!ObjectID.isValid(id)) {
    return res.status(NOT_FOUND).send({
      message: 'ID not valid.',
      value: id
    });
  }

  Setting.findByIdAndUpdate(id, { $set: body }, { new: true } )
    .then((setting) => {
      if (!setting) {
        return res.status(NOT_FOUND).send({
          message: 'ID not found.',
          value: id
        })
      }
      res.status(OK).send(setting);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
})

router.post(SETTING_ROUTE, (req, res) => {
  const setting = new Setting(req.body);
  setting.save()
    .then(() => {
      res.status(OK).send('Saved new setting.');
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
})

module.exports = router;