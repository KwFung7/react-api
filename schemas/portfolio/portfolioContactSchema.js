let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const portfolioContactSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  github_link: String,
  linkedin_link: String
});

module.exports = portfolioContactSchema;