import {
  START_LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  START_LOGOUT_PROCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../actions/actionTypes';

const initialState = {
  login: false,
  loading: false,
  error: {}
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN_PROCESS:
      return {
        ...state,
        loading: true,
        login: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
        error: action.error
      }
      case START_LOGOUT_PROCESS:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        login: false
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
};