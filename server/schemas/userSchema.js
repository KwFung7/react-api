let mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { SECRET_KEY } = require('../constants');

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
});

userSchema.methods.toJSON = function (){
  let user = this;
  const userObject = user.toObject();
  
  return _.pick(userObject, ['_id', 'userName']);
}

userSchema.methods.generateAuthToken = function (){
  let user = this;
  const access = 'auth';
  const token = jwt.sign({ _id: user._id.toHexString(), access }, SECRET_KEY).toString();

  user.tokens = user.tokens.concat([{ access, token }]);
  return user.save().then(() => token);
}

module.exports = userSchema;