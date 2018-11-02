// Load HTTP module
const express = require('express');
const app = express();

// Load messages routes
const messages = require('./routes/messages');
const health = require('./routes/health');

const logger = require('./logging/logger');


// Register messages routes
app.use('/messages', messages);
app.use('/health', health);
const port = 3000;

app.listen(port, () => logger.info(`Example app listening on port ${port}`));