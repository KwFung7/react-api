import {
  START_LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  START_LOGOUT_PROCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CLEAR_ERROR,
  CHECKING_TOKEN,
  TOKEN_VALID_SUCCESS,
  TOKEN_VALID_FAILURE,
  SET_CURRENT_LOCALE
} from '../actions/actionTypes';
import { DEFAULT_LOCALE } from '../constants';

const initialState = {
  login: false,
  loading: false,
  error: {},
  userName: '',
  role: '',
  currentLang: DEFAULT_LOCALE
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN_PROCESS:
      return {
        ...state,
        loading: true,
        login: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        userName: action.userName,
        role: action.role
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
        error: action.error
      };
      case START_LOGOUT_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        login: false,
        userName: '',
        role: ''
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case CHECKING_TOKEN:
      return {
        ...state,
        loading: true
      };
    case TOKEN_VALID_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        userName: action.userName,
        role: action.role
      };
    case TOKEN_VALID_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
        userName: '',
        role: '',
        error: action.error
      };
    case SET_CURRENT_LOCALE:
      return {
        ...state,
        currentLang: action.locale
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: {}
      };
    default:
      return state;
  }
};