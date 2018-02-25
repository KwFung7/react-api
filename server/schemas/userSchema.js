let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3,
    required: [true, 'Username required'],
    validate: {
      validator: (value) => {
        // first and last char cant be separator
        // but internal separator allowed 
        return /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(value);
      },
      message: '{VALUE} is not valid username'
    }
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, 'Password required']
  },
  tokens: [{
    access: {
      type: String,
      required: [true, 'Token access type required']
    },
    token: {
      type: String,
      required: [true, 'Token required']
    }
  }]
})

module.exports = userSchema;