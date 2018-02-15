let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017').then(() => {
  console.log('Connected to MongoDB.');
}, (err) => {
  console.log(err);
});

module.exports = mongoose;

