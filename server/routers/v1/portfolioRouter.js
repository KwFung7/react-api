const express = require('express');
const cors = require('cors');
const { ObjectID } = require('mongodb');
const { Portfolio } = require('../../models');
const { PORTFOLIO_ROUTE, OK, BAD_REQUEST, NOT_FOUND } = require('../../constants');

let router = express.Router();
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

router.post(PORTFOLIO_ROUTE, (req, res) => {
  let portfolio = new Portfolio(req.body);
  portfolio.save()
    .then(() => {
      res.status(OK).send('Saved new portfolio.');
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    });
})

module.exports = router;