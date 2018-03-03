const express = require('express');
const _ = require('lodash');
const { User } = require('../../models');
const authenticate = require('../../middlewares/authenticate');
const { OK, BAD_REQUEST, USER_ROUTE } = require('../../constants');

let router = express.Router();

/* POST ===================================== */
router.post(USER_ROUTE, (req, res) => {
  const body = _.pick(req.body, ['userName', 'password']);
  let user = new User(body);
  user.save()
    .then(() => {
      // return promise for token generation
      // with user id, access type and secret key
      return user.generateAuthToken();
    })
    .then((token) => {
      res.header('x-auth', token).send(user);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    });
});

/* GET ===================================== */
router.get(USER_ROUTE, authenticate, (req, res) => {
  res.send(req.user);
});

module.exports = router;