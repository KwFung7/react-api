const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Portfolio } = require('../../models');
const { 
  PORTFOLIO_ROUTE,
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  ENABLED_UPDATE_PORTFOLIO_FIELD
} = require('../../constants');

let router = express.Router();
/* GET ===================================== */
router.get(PORTFOLIO_ROUTE, (req, res) => {
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
router.patch(`${PORTFOLIO_ROUTE}/:id`, (req, res) => {
  const id = req.params.id;
  // only allow specific field for update
  const body = _.pick(req.body, ENABLED_UPDATE_PORTFOLIO_FIELD);

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
router.post(PORTFOLIO_ROUTE, (req, res) => {
  let portfolio = new Portfolio(req.body);
  portfolio.save()
    .then((doc) => {
      res.status(OK).send(doc);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    });
})

module.exports = router;