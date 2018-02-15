let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const portfolioHeaderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});

module.exports = portfolioHeaderSchema;