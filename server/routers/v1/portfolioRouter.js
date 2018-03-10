const express = require('express');
const cors = require('cors');
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
  ADMIN_USERNAME
} = require('../../constants');

let router = express.Router();
/* GET ===================================== */
router.get(PORTFOLIO_ROUTE, authenticate, (req, res) => {
  if (!_.includes(ADMIN_USERNAME, req.user.userName)) {
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

router.get(`${PORTFOLIO_ROUTE}/:id`, cors(), (req, res) => {
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

  if (!_.isEqual(id, req.user.portfolioID)) {
    return res.status(UNAUTHORIZED).send({
      message: 'This account is not authorized to edit this portfolio',
      value: req.user.userName
    });
  }

  if (!ObjectID.isValid(id)) {
    return res.status(NOT_FOUND).send({
      message: 'ID not valid.',
      value: id
    });
  }

  Portfolio.findByIdAndUpdate(id, { $set: body }, { new: true } )
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(NOT_FOUND).send({
          message: 'ID not found.',
          value: id
        })
      }
      res.status(OK).send(portfolio);
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