import {
  FETCHING_PORTFOLIO_LIST,
  FETCH_PORTFOLIO_LIST_SUCCESS,
  FETCH_PORTFOLIO_LIST_FAILURE
} from '../actions/actionTypes';

const initialState = {
  list: [],
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
    default:
      return state;
  }
};