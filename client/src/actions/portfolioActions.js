import axios from 'axios';
import * as types from './actionTypes';
import { API_HOST_URL, API_ROUTE, PORTFOLIO_ROUTE } from '../constants';

export const fetchPortfolioList = (dispatch) => {
  const config = {
    method: 'GET',
    url: `${API_HOST_URL}${API_ROUTE}${PORTFOLIO_ROUTE}`
  }

  return (dispatch) => {
    dispatch({
      type: types.FETCHING_PORTFOLIO_LIST
    });
    axios(config)
    .then((payload) => {
      const { data = [] } = payload;
      dispatch({
        type: types.FETCH_PORTFOLIO_LIST_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_PORTFOLIO_LIST_FAILURE,
        error
      })
    })
  }
};