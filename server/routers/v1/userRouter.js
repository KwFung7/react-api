const express = require('express');
const _ = require('lodash');
const { User } = require('../../models');
const authenticate = require('../../middlewares/authenticate');
const { OK, BAD_REQUEST, USER_ROUTE } = require('../../constants');

let router = express.Router();

/* POST ===================================== */
router.post(USER_ROUTE, (req, res) => {
  let body = _.pick(req.body, ['userName', 'password']);
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

router.post(`${USER_ROUTE}/login`, (req, res) => {
  let body = _.pick(req.body, ['userName', 'password']);
  
  User.findByCredentials(body.userName, body.password)
  .then((user) => {
    return user.generateAuthToken()
    .then((token) => {
      res.header('x-auth', token).send(user);
    })
  })
  .catch((err) => {
    res.status(BAD_REQUEST).send(err);
  })
})

/* GET ===================================== */
router.get(USER_ROUTE, authenticate, (req, res) => {
  res.send(req.user);
});

/* DELETE ===================================== */
router.delete(`${USER_ROUTE}/logout`, authenticate, (req, res) => {
  req.user.removeToken(req.token)
  .then(() => {
    res.send('Logout Successful.');
  })
  .catch((err) => {
    res.status(BAD_REQUEST).send(err);
  })
})

module.exports = router;