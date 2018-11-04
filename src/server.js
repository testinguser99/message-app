// Load HTTP module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const logger = require('./logging/logger');

// Allow parsing of json format
app.use(bodyParser.json());

let options = {
    logger: logger
}

// Register all routes
const routes = require('./routes');
routes.getRoutes(options).forEach((route) => { 
    app.use(route) 
});

const port = 3000;

app.listen(port, () => {
    logger.info(`Example app listening on port ${port}`); 
});
