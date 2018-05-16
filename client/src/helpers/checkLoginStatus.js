import { TOKEN, EXPIRE_AT, USER_ID } from '../constants';
import _ from 'lodash';
import jwt from 'jsonwebtoken';

const checkLoginStatus = () => {
  let storage = window.localStorage;
  const token = storage.getItem(TOKEN);
  const expireAt = storage.getItem(EXPIRE_AT);
  const userID = storage.getItem(USER_ID);

  // check token expired or not
  let now = new Date();
  const isExpired = now.toISOString() > expireAt;

  // check token security
  const isValid = () => {
    if (_.isEmpty(token)) {
      return false;
    } else {
      let decoded;
      try {
        decoded = jwt.decode(token);
        return decoded._id === userID;
      } catch(err) {
        return false;
      }
    }
  };

  return isValid() && !isExpired;
};

export default checkLoginStatus;