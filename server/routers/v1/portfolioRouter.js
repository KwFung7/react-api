const express = require('express');
const cors = require('cors');
const HttpStatus = require('http-status-codes');
const { Portfolio } = require('../../models');
let router = express.Router();

const { OK, BAD_REQUEST } = HttpStatus
router.get('/portfolio', (req, res) => {
  Portfolio.find()
    .then((portfolios) => {
      res.status(OK).send({ portfolios });
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
});

router.get('/portfolio/:id', cors(), (req, res) => {
  const id = req.params.id
  Portfolio.findById(id)
    .then((portfolio) => {
      if (!portfolio) {
        res.status(BAD_REQUEST).send({
          message: 'ID not found.',
          value: id
        });
        return;
      }
      res.status(OK).send(portfolio);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
});

router.post('/portfolio', (req, res) => {
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