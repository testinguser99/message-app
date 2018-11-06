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

// Error handling
const { AssertionError } = require('assert');
const NotFoundError = require('./errors/notFoundError');
app.use((error, req, res, next) => {
    logger.error(error.stack);
    if (error instanceof AssertionError) {
        return res.status(400).json({
            type: 'AssertionError',
            message: error.message
        });
    } else if (error instanceof NotFoundError) {
        return res.status(404).json({
            type: 'NotFoundError',
            message: error.message
        });
    } else {
        res.status(500).json({
            type: 'InternalServerError',
            message: error.message
        });
    }
});

const HTTP_PORT = process.env.HTTP_PORT || 8080
app.listen(HTTP_PORT, () => {
    logger.info(`message-app listening on port ${HTTP_PORT}`); 
});
