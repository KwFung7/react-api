let app = require('./app'); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server - Listening on port ${port}`));