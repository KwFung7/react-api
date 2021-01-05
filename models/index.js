let mongoose = require('../db-connect.js');
const portfolioSchema = require('../schemas/portfolio/portfolioSchema');
const settingSchema = require('../schemas/settingSchema');
const userSchema = require('../schemas/userSchema');

/** ============================================================= *
  * Model
  * ============================================================= */
const Portfolio = mongoose.model('Portfolio', portfolioSchema);
const Setting = mongoose.model('Setting', settingSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Portfolio,
  Setting,
  User
};