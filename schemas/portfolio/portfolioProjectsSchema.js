let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const portfolioProjectsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  ios_app: [
    {
      id: {
        type: Number,
        required: true
      },
      short_name: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      site: {
        type: String,
        required: true
      },
      details: [{
        type: String,
        required: true
      }],
      code_images: [{
        type: String,
        required: true
      }],
      scenes: [{
        type: String,
        required: true
      }]
    }
  ]
});

module.exports = portfolioProjectsSchema;