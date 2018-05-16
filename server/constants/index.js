const HttpStatus = require('http-status-codes');
const { OK, BAD_REQUEST, NOT_FOUND, UNAUTHORIZED } = HttpStatus;

// Route
const PORTFOLIO_ROUTE = '/portfolio';
const SETTING_ROUTE = '/setting';
const USER_ROUTE = '/user';
const LOG_ROUTE = '/log';
const V1_ROUTE = '/v1';
const API_ROUTE = '/api';

// System setting
const ENABLED_UPDATE_SETTING = ['selected_portfolio'];

// Password bcrypt round
const GEN_SALT_ROUND = 10;

// Token expire time
const TOKEN_EXPIRE_DAY = 1;

// Portfolio
const ENABLED_UPDATE_PORTFOLIO_FIELD = [
  'name',
  'header',
  'intro',
  'projects',
  'contact',
];

// Admin role
const ADMIN_ROLE = 'admin';

// Error message
const WRONG_ACCOUNT = 'Couldn\'t find your Account';
const WRONG_PASSWORD = 'Wrong password. Please try again.';

module.exports = {
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED,
  PORTFOLIO_ROUTE,
  SETTING_ROUTE,
  USER_ROUTE,
  LOG_ROUTE,
  V1_ROUTE,
  API_ROUTE,
  ENABLED_UPDATE_SETTING,
  ENABLED_UPDATE_PORTFOLIO_FIELD,
  GEN_SALT_ROUND,
  ADMIN_ROLE,
  TOKEN_EXPIRE_DAY,
  WRONG_ACCOUNT,
  WRONG_PASSWORD
};