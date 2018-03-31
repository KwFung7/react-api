import {
  FETCHING_SYSTEM_SETTING,
  FETCH_SYSTEM_SETTING_SUCCESS,
  FETCH_SYSTEM_SETTING_FAILURE,
  UPDATING_SYSTEM_SETTING,
  UPDATE_SYSTEM_SETTING_SUCCESS,
  UPDATE_SYSTEM_SETTING_FAILURE
} from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  loaded: false,
  error: {}
};

export const setting = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SYSTEM_SETTING:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case FETCH_SYSTEM_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case FETCH_SYSTEM_SETTING_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case UPDATING_SYSTEM_SETTING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_SYSTEM_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case UPDATE_SYSTEM_SETTING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};