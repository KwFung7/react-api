const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Setting } = require('../../models');
const authenticate = require('../../middlewares/authenticate');
const { SETTING_ROUTE, OK, BAD_REQUEST, UNAUTHORIZED, ENABLED_UPDATE_SETTING, ADMIN_ROLE } = require('../../constants');

let router = express.Router();
/* GET ===================================== */
router.get(SETTING_ROUTE, cors(), (req, res) => {
  Setting.find()
    .then((settings) => {
      res.status(OK).send(settings);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
})

/* PATCH ===================================== */
router.patch(`${SETTING_ROUTE}/:id`, authenticate, (req, res) => {
  const id = req.params.id;
  // only allow specific field for update
  const body = _.pick(req.body, ENABLED_UPDATE_SETTING);

  if (ADMIN_ROLE !== req.user.role) {
    return res.status(UNAUTHORIZED).send({
      message: 'This account is not authorized to edit system setting.',
      value: req.user.userName
    });
  }

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

/* POST ===================================== */
router.post(SETTING_ROUTE, authenticate, (req, res) => {
  let obj = Object.assign(req.body, { _creator: req.user._id });
  const setting = new Setting(obj);

  if (ADMIN_ROLE !== req.user.role) {
    return res.status(UNAUTHORIZED).send({
      message: 'This account is not authorized to add system setting.',
      value: req.user.userName
    });
  }

  setting.save()
    .then(() => {
      res.status(OK).send('Saved new setting.');
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
})

module.exports = router;