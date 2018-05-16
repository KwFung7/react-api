import axios from 'axios';
import { push } from 'react-router-redux';
import _ from 'lodash';
import * as types from './actionTypes';
import { USER_ROUTE, LOGIN_ROUTE, USER_NAME, USER_ROLE, USER_ID, X_AUTH } from '../constants';

export const startLoginProcess = (data, callback) => {
  const config = {
    method: 'POST',
    url: `${USER_ROUTE}${LOGIN_ROUTE}`,
    data
  };

  return (dispatch) => {
    dispatch({
      type: types.START_LOGIN_PROCESS
    });
    axios(config)
    .then((payload) => {
      const { data = {} } = payload;
      dispatch({
        type: types.LOGIN_SUCCESS,
        userName: data.userName,
        role: data.role 
      });
      // also store the userName and role into localStorage
      window.localStorage.setItem(USER_NAME, data.userName);
      window.localStorage.setItem(USER_ROLE, data.role);
      window.localStorage.setItem(USER_ID, data._id);

      if (_.isFunction(callback)) {
        try {
          callback();
        } catch(error) {
          console.log(error);
        }
      }
    })
    .catch((error) => {
      dispatch({
        type: types.LOGIN_FAILURE,
        error
      })
    })
  }
};

export const startLogoutProcess = (callback) => {
  const config = {
    method: 'DELETE',
    url: `${USER_ROUTE}/logout`
  };

  return (dispatch) => {
    dispatch({
      type: types.START_LOGOUT_PROCESS
    });
    axios(config)
    .then(() => {
      dispatch({
        type: types.LOGOUT_SUCCESS,
      });
      window.localStorage.clear();

      if (_.isFunction(callback)) {
        try {
          callback();
        } catch(error) {
          console.log(error);
        }
      }
    })
    .catch((error) => {
      dispatch({
        type: types.LOGOUT_FAILURE,
        error
      })
    })
  }
};

export const checkToken = (token) => {
  const config = {
    method: 'POST',
    url: `${USER_ROUTE}/token`,
    data: {token}
  };

  return (dispatch) => {
    dispatch({
      type: types.CHECKING_TOKEN
    });
    axios(config)
    .then((payload) => {
      axios.defaults.headers.common[X_AUTH] = token;
      const { data = {} } = payload;
      dispatch({
        type: types.TOKEN_VALID_SUCCESS,
        userName: data.userName,
        role: data.role 
      });
    })
    .catch((error) => {
      console.log('Token is invalid.');
      window.localStorage.clear();
      dispatch({
        type: types.TOKEN_VALID_FAILURE,
        error
      });
      dispatch(push(LOGIN_ROUTE));
    })
  }
};

export const setCurrentLocale = (locale) => {
  return {
    type: types.SET_CURRENT_LOCALE,
    locale
  }
};

export const clearError = () => {
  return (dispatch) => {
    dispatch({ type: types.CLEAR_ERROR });
  }
};