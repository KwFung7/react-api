require('./config/config');
let app = require('./app');

// const port = process.env.PORT;
// app.listen(port, () => console.log(`Server - Listening on port ${port}`));
// module.exports = {
//     app
// };

// Transform to serverless
let serverless = require('serverless-http/serverless-http');
module.exports.handler = serverless(app);
