import {
  FETCHING_SERVER_LOG,
  FETCH_SERVER_LOG_SUCCESS,
  FETCH_SERVER_LOG_FAILURE
} from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  loaded: false,
  error: {}
};

export const serverLog = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SERVER_LOG:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case FETCH_SERVER_LOG_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case FETCH_SERVER_LOG_FAILURE:
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