const express = require('express');
const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Portfolio } = require('../../models');
const authenticate = require('../../middlewares/authenticate');
const { 
  PORTFOLIO_ROUTE,
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED,
  ENABLED_UPDATE_PORTFOLIO_FIELD,
  ADMIN_ROLE
} = require('../../constants');

let router = express.Router();
/* GET ===================================== */
router.get(PORTFOLIO_ROUTE, authenticate, (req, res) => {
  if (ADMIN_ROLE !== req.user.role) {
    return res.status(UNAUTHORIZED).json({
      message: 'This account is not authorized to get portfolio index',
      value: req.user.userName
    });
  }

  Portfolio.find()
    .then((portfolios) => {
      res.status(OK).json({ portfolios });
    })
    .catch((err) => {
      res.status(BAD_REQUEST).json(err);
    })
});

router.get(`${PORTFOLIO_ROUTE}/:id`, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(NOT_FOUND).json({
      message: 'ID not valid.',
      value: id
    });
  }
  Portfolio.findById(id)
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(NOT_FOUND).json({
          message: 'ID not found.',
          value: id
        });
      }
      res.status(OK).json(portfolio);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).json(err);
    })
});

/* PATCH ===================================== */
router.patch(`${PORTFOLIO_ROUTE}/:id`, authenticate, (req, res) => {
  const id = req.params.id;
  // only allow specific field for update
  const body = _.pick(req.body, ENABLED_UPDATE_PORTFOLIO_FIELD);

  if (!ObjectID.isValid(id)) {
    return res.status(NOT_FOUND).json({
      message: 'ID not valid.',
      value: id
    });
  }

  Portfolio.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(NOT_FOUND).json({
          message: 'ID not found.',
          value: id
        })
      } else if (!_.isEqual(portfolio._creator.toHexString(), req.user._id.toHexString())) {
        return res.status(UNAUTHORIZED).json({
          message: 'This account is not authorized to edit this portfolio',
          value: req.user.userName
        });
      } else {
        res.status(OK).json(portfolio);
      }
    })
    .catch((err) => {
      res.status(BAD_REQUEST).json(err);
    })
});

/* POST ===================================== */
router.post(PORTFOLIO_ROUTE, authenticate, (req, res) => {
  let obj = Object.assign(req.body, { _creator: req.user._id });
  let portfolio = new Portfolio(obj);
  portfolio.save()
    .then((doc) => {
      res.status(OK).json(doc);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).json(err);
    });
});

module.exports = router;
