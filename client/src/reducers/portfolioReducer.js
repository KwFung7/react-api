import {
  FETCHING_PORTFOLIO_LIST,
  FETCH_PORTFOLIO_LIST_SUCCESS,
  FETCH_PORTFOLIO_LIST_FAILURE,
  FETCHING_SPECIFIC_PORTFOLIO,
  FETCH_SPECIFIC_PORTFOLIO_SUCCESS,
  FETCH_SPECIFIC_PORTFOLIO_FAILURE,
  UPDATING_PORTFOLIO,
  UPDATE_PORTFOLIO_SUCCESS,
  UPDATE_PORTFOLIO_FAILURE
} from '../actions/actionTypes';

const initialState = {
  list: [],
  data: {},
  loading: false,
  loaded: false,
  error: {}
};

export const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PORTFOLIO_LIST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case FETCH_PORTFOLIO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.payload
      };
    case FETCH_PORTFOLIO_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case FETCHING_SPECIFIC_PORTFOLIO:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case FETCH_SPECIFIC_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case FETCH_SPECIFIC_PORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case UPDATING_PORTFOLIO:
      return {
        ...state,
        loading: true
      };
    case UPDATE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case UPDATE_PORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};