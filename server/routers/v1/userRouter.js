const express = require('express');
const _ = require('lodash');
const { User } = require('../../models');
const { OK, BAD_REQUEST, USER_ROUTE } = require('../../constants');

let router = express.Router();

/* POST ===================================== */
router.post(USER_ROUTE, (req, res) => {
  const body = _.pick(req.body, ['userName', 'password']);
  let user = new User(body);
  user.save()
    .then((user) => {
      res.status(OK).send(user);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    });
})
module.exports = router;