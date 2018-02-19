const HttpStatus = require('http-status-codes');
const { OK, BAD_REQUEST, NOT_FOUND } = HttpStatus;

// Route
const PORTFOLIO_ROUTE = '/portfolio';
const SETTING_ROUTE = '/setting';
const V1_ROUTE = '/v1';
const API_ROUTE = '/api';

// Database
const DB_CONNECTION = 'mongodb://localhost:27017';

// System setting
const ENABLED_UPDATE_SETTING = ['selected_portfolio'];

module.exports = {
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  PORTFOLIO_ROUTE,
  SETTING_ROUTE,
  V1_ROUTE,
  API_ROUTE,
  DB_CONNECTION,
  ENABLED_UPDATE_SETTING,
}