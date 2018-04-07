const fs = require('fs');

const logger = (req, res, next) => {
  // for server log
  let now = new Date().toString();
  let ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  let log = `Time: ${now}\nMethod/URL: ${req.method} ${req.url}\nIP address: ${ip}\nUser-agent: ${req.headers['user-agent']}\n`;

  fs.appendFile('server.log', log, err => {
    if (err) {
      console.error('Unable to append server log.');
      return;
    }
    console.log('Record was appended to server log.');
  });
  next();
};

module.exports = logger;