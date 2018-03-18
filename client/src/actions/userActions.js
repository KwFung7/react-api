import axios from 'axios';
import { push } from 'react-router-redux';
import * as types from './actionTypes';
import { API_HOST_URL, API_ROUTE, USER_ROUTE, LOGIN_ROUTE } from '../constants';

export const startLoginProcess = (data, route) => {
  const config = {
    method: 'POST',
    url: `${API_HOST_URL}${API_ROUTE}${USER_ROUTE}${LOGIN_ROUTE}`,
    data
  }

  return (dispatch) => {
    dispatch({
      type: types.START_LOGIN_PROCESS
    });
    axios(config)
    .then((payload) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
      })
      try {
        dispatch(push(route));
      } catch(error) {
        console.log(error);
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

export const startLogoutProcess = (route) => {
  const config = {
    method: 'DELETE',
    url: `${API_HOST_URL}${API_ROUTE}${USER_ROUTE}/logout`
  }

  return (dispatch) => {
    dispatch({
      type: types.START_LOGOUT_PROCESS
    });
    axios(config)
    .then((payload) => {
      dispatch({
        type: types.LOGOUT_SUCCESS,
      })
      try {
        dispatch(push(route));
      } catch(error) {
        console.log(error);
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

export const clearError = () => {
  return (dispatch) => {
    dispatch({ type: types.CLEAR_ERROR });
  }
};