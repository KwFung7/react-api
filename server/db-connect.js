let mongoose = require('mongoose');
const { DB_CONNECTION } = require('./constants');
const dbConnection = process.env.MONGODB_URL || DB_CONNECTION;

mongoose.Promise = global.Promise;
mongoose.connect(dbConnection).then(() => {
  console.log('Connected to MongoDB.');
}, (err) => {
  console.log(err);
});

module.exports = mongoose;

