let mongoose = require('mongoose');
const fs = require('fs');
const dbConnection = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(dbConnection, {
  useNewUrlParser: true,
  ssl: true,
  sslValidate: false,
  sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem')
}).then(() => {
  console.log('Connected to MongoDB.');
}, (err) => {
  console.log(err);
});

module.exports = mongoose;

