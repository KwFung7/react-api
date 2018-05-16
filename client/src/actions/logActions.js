import axios from 'axios';
import * as types from './actionTypes';
import { SERVER_LOG_ROUTE } from "../constants";

export const fetchServerLog = () => {
  const config = {
    method: 'GET',
    url: SERVER_LOG_ROUTE
  };

  return (dispatch) => {
    dispatch({
      type: types.FETCHING_SERVER_LOG
    });
    axios(config)
    .then((payload) => {
      const { data = {} } = payload;
      dispatch({
        type: types.FETCH_SERVER_LOG_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_SERVER_LOG_FAILURE,
        error
      });
    })
  }
};