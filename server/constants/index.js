const HttpStatus = require('http-status-codes');
const { OK, BAD_REQUEST } = HttpStatus;

// Route
const PORTFOLIO_ROUTE = '/portfolio';
const SETTING_ROUTE = '/setting';
const V1_ROUTE = '/v1';
const API_ROUTE = '/api';

module.exports = {
  OK,
  BAD_REQUEST,
  PORTFOLIO_ROUTE,
  SETTING_ROUTE,
  V1_ROUTE,
  API_ROUTE
}