let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/** ============================================================= *
  * Subdocuments
  * ============================================================= */
const portfolioHeaderSchema = require('./portfolioHeaderSchema');
const portfolioIntroSchema = require('./portfolioIntroSchema');
const portfolioProjectsSchema = require('./portfolioProjectsSchema');
const portfolioContactSchema = require('./portfolioContactSchema');

/** ============================================================= *
  * Main
  * ============================================================= */
const portfolioSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  header: portfolioHeaderSchema,
  intro: portfolioIntroSchema,
  projects: portfolioProjectsSchema,
  contact: portfolioContactSchema,
  _creator: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

module.exports = portfolioSchema;
