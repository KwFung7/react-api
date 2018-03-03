const { UNAUTHORIZED } = require('../constants');
const { User } = require('../models');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');
  User.findByToken(token)
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }
      
      req.user = user;
      req.token = token;
      next();
    })
    .catch((e) => {
      res.status(UNAUTHORIZED).send();
    })
}

module.exports = authenticate;