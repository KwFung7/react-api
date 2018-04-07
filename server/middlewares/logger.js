const fs = require('fs');

const logger = (req, res, next) => {
  // for server log
  let now = new Date().toString();
  let ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  let log = `Time: ${now}\nMethod/URL: ${req.method} ${req.url}\nIP address: ${ip}\nUser-agent: ${req.headers['user-agent']}`;

  let data = fs.readFileSync('server.log').toString().split("\n");
  log.split("\n").reverse().forEach((line) => {
    data.unshift(line);
  })
  log = data.join("\n");

  fs.writeFile('server.log', log, err => {
    if (err) {
      console.error('Unable to append server log.');
      return;
    }
    console.log('Record was appended to server log.');
  });
  next();
};

module.exports = logger;