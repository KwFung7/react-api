let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const settingSchema = new Schema({
  selected_portfolio: {
    type: Schema.Types.ObjectId,
    required: true
  },
  _creator: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

module.exports = settingSchema;