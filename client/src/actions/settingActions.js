import axios from 'axios';
import _ from 'lodash';
import * as types from './actionTypes';
import { API_HOST_URL, API_ROUTE, SETTING_ROUTE } from '../constants';

export const fetchSystemSetting = () => {
  const config = {
    method: 'GET',
    url: `${API_HOST_URL}${API_ROUTE}${SETTING_ROUTE}`
  }

  return (dispatch) => {
    dispatch({
      type: types.FETCHING_SYSTEM_SETTING
    });
    axios(config)
    .then((payload) => {
      const { data = [] } = payload;
      dispatch({
        type: types.FETCH_SYSTEM_SETTING_SUCCESS,
        payload: _.head(data)
      })
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_SYSTEM_SETTING_FAILURE,
        error
      })
    })
  }
};