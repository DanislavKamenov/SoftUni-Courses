const port = 3000;
const config = require('./config/config');
const database = require('./config/database.config');
const express = require('express');

/*globals process*/
let app = express();
let environemnt = process.env.NODE_environment || 'development';

database(config[environemnt]);
require('./config/express')(app, config[environemnt]);
require('./config/routes')(app);
require('./config/passport')();

app.listen(port, () => {console.log(`listening on port ${port}`);});