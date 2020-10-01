const express = require('express');
const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Setting } = require('../../models');
const authenticate = require('../../middlewares/authenticate');
const { SETTING_ROUTE, OK, BAD_REQUEST, UNAUTHORIZED, NOT_FOUND, ENABLED_UPDATE_SETTING, ADMIN_ROLE } = require('../../constants');

let router = express.Router();
/* GET ===================================== */
router.get(SETTING_ROUTE, (req, res) => {
  Setting.find()
    .then((settings) => {
      res.status(OK).json(settings);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).json(err);
    })
});

/* PATCH ===================================== */
router.patch(`${SETTING_ROUTE}/:id`, authenticate, (req, res) => {
  const id = req.params.id;
  // only allow specific field for update
  const body = _.pick(req.body, ENABLED_UPDATE_SETTING);

  if (ADMIN_ROLE !== req.user.role) {
    return res.status(UNAUTHORIZED).json({
      message: 'This account is not authorized to edit system setting.',
      value: req.user.userName
    });
  }

  if (!ObjectID.isValid(id)) {
    return res.status(NOT_FOUND).json({
      message: 'ID not valid.',
      value: id
    });
  }

  Setting.findByIdAndUpdate(id, { $set: body }, { new: true } )
    .then((setting) => {
      if (!setting) {
        return res.status(NOT_FOUND).json({
          message: 'ID not found.',
          value: id
        })
      }
      res.status(OK).json(setting);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).json(err);
    })
});

/* POST ===================================== */
router.post(SETTING_ROUTE, authenticate, (req, res) => {
  let obj = Object.assign(req.body, { _creator: req.user._id });
  const setting = new Setting(obj);

  if (ADMIN_ROLE !== req.user.role) {
    return res.status(UNAUTHORIZED).json({
      message: 'This account is not authorized to add system setting.',
      value: req.user.userName
    });
  }

  setting.save()
    .then(() => {
      res.status(OK).json('Saved new setting.');
    })
    .catch((err) => {
      res.status(BAD_REQUEST).json(err);
    })
});

module.exports = router;
