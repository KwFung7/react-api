let mongoose = require('mongoose');
const { DB_CONNECTION } = require('./constants');

mongoose.Promise = global.Promise;
mongoose.connect(DB_CONNECTION).then(() => {
  console.log('Connected to MongoDB.');
}, (err) => {
  console.log(err);
});

module.exports = mongoose;

