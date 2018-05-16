import axios from 'axios';
import * as types from './actionTypes';
import { PORTFOLIO_ROUTE } from '../constants';

export const fetchPortfolioList = () => {
  const config = {
    method: 'GET',
    url: PORTFOLIO_ROUTE
  };

  return (dispatch) => {
    dispatch({
      type: types.FETCHING_PORTFOLIO_LIST
    });
    axios(config)
    .then((payload) => {
      const { data = [] } = payload;
      dispatch({
        type: types.FETCH_PORTFOLIO_LIST_SUCCESS,
        payload: data.portfolios
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_PORTFOLIO_LIST_FAILURE,
        error
      });
    })
  }
};

export const fetchSpecificPortfolio = (id) => {
  const config = {
    method: 'GET',
    url: `${PORTFOLIO_ROUTE}/${id}`
  };

  return (dispatch) => {
    dispatch({
      type: types.FETCHING_SPECIFIC_PORTFOLIO
    });
    axios(config)
    .then((payload) => {
      const { data = [] } = payload;
      dispatch({
        type: types.FETCH_SPECIFIC_PORTFOLIO_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_SPECIFIC_PORTFOLIO_FAILURE,
        error
      });
    })
  }
};

export const setPortfolioData = (id, newData) => {
  const config = {
    method: 'PATCH',
    url: `${PORTFOLIO_ROUTE}/${id}`,
    data: newData
  };

  return (dispatch) => {
    dispatch({
      type: types.UPDATING_PORTFOLIO
    });
    axios(config)
    .then((payload) => {
      const { data = {} } = payload;
      dispatch({
        type: types.UPDATE_PORTFOLIO_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: types.UPDATE_PORTFOLIO_FAILURE,
        error
      });
    })
  }
};