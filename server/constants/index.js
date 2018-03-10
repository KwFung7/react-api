const HttpStatus = require('http-status-codes');
const { OK, BAD_REQUEST, NOT_FOUND, UNAUTHORIZED } = HttpStatus;

// Route
const PORTFOLIO_ROUTE = '/portfolio';
const SETTING_ROUTE = '/setting';
const USER_ROUTE = '/user';
const V1_ROUTE = '/v1';
const API_ROUTE = '/api';

// Database
const DB_CONNECTION = 'mongodb://localhost:27017';

// System setting
const ENABLED_UPDATE_SETTING = ['selected_portfolio'];

// Token generation secret key
const SECRET_KEY = 'FUCKMYLIFE';

// Password bcrypt round
const GEN_SALT_ROUND = 10;

// Portfolio
const ENABLED_UPDATE_PORTFOLIO_FIELD = [
  'name',
  'header',
  'intro',
  'projects',
  'contact',
];

// Admin userName
const ADMIN_USERNAME = ['admin'];

module.exports = {
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED,
  PORTFOLIO_ROUTE,
  SETTING_ROUTE,
  USER_ROUTE,
  V1_ROUTE,
  API_ROUTE,
  DB_CONNECTION,
  ENABLED_UPDATE_SETTING,
  ENABLED_UPDATE_PORTFOLIO_FIELD,
  SECRET_KEY,
  GEN_SALT_ROUND,
  ADMIN_USERNAME
}