let mongoose = require('../db-connect.js');
const portfolioSchema = require('../schemas/portfolio/portfolioSchema');

/** ============================================================= *
  * Model
  * ============================================================= */
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = {
  Portfolio
};