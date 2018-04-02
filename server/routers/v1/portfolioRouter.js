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
    return res.status(UNAUTHORIZED).send({
      message: 'This account is not authorized to get portfolio index',
      value: req.user.userName
    });
  }

  Portfolio.find()
    .then((portfolios) => {
      res.status(OK).send({ portfolios });
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
});

router.get(`${PORTFOLIO_ROUTE}/:id`, (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(NOT_FOUND).send({
      message: 'ID not valid.',
      value: id
    });
  }
  Portfolio.findById(id)
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(NOT_FOUND).send({
          message: 'ID not found.',
          value: id
        });
      }
      res.status(OK).send(portfolio);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
});

/* PATCH ===================================== */
router.patch(`${PORTFOLIO_ROUTE}/:id`, authenticate, (req, res) => {
  const id = req.params.id;
  // only allow specific field for update
  const body = _.pick(req.body, ENABLED_UPDATE_PORTFOLIO_FIELD);

  if (!ObjectID.isValid(id)) {
    return res.status(NOT_FOUND).send({
      message: 'ID not valid.',
      value: id
    });
  }

  Portfolio.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(NOT_FOUND).send({
          message: 'ID not found.',
          value: id
        })
      } else if (!_.isEqual(portfolio._creator.toHexString(), req.user._id.toHexString())) {
        return res.status(UNAUTHORIZED).send({
          message: 'This account is not authorized to edit this portfolio',
          value: req.user.userName
        });
      } else {
        res.status(OK).send(portfolio);
      }
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
})

/* POST ===================================== */
router.post(PORTFOLIO_ROUTE, authenticate, (req, res) => {
  let obj = Object.assign(req.body, { _creator: req.user._id });
  let portfolio = new Portfolio(obj);
  portfolio.save()
    .then((doc) => {
      res.status(OK).send(doc);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    });
})

module.exports = router;