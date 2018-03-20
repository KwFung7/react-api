import { TOKEN, EXPIRE_AT, SECRET_KEY } from '../constants';
import _ from 'lodash';
import jwt from 'jsonwebtoken';

const checkLoginStatus = () => {
  let storage = window.localStorage;
  const token = storage.getItem(TOKEN);
  const expireAt = storage.getItem(EXPIRE_AT);

  // check token expired or not
  let now = new Date();
  const isExpired = now.toISOString() > expireAt;

  // check token security
  const isMatch = () => {
    if (_.isEmpty(token)) {
      return false;
    } else {
      let decoded;
      try {
        jwt.verify(token, SECRET_KEY);
        return true;
      } catch(err) {
        return false;
      }
    }
  }

  const alreadyLogin = isMatch() && !isExpired;
  return alreadyLogin;
}

export default checkLoginStatus;