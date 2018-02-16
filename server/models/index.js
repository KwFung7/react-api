let mongoose = require('../db-connect.js');
const portfolioSchema = require('../schemas/portfolio/portfolioSchema');
const settingSchema = require('../schemas/settingSchema');

/** ============================================================= *
  * Model
  * ============================================================= */
const Portfolio = mongoose.model('Portfolio', portfolioSchema);
const Setting = mongoose.model('Setting', settingSchema);

module.exports = {
  Portfolio,
  Setting
};