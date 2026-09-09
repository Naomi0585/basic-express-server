'use strict';

const express = require('express');

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');

const app = express();

// Application-level middleware
app.use(logger);

// Person route
app.get('/person', validator, (req, res) => {
  res.status(200).json({
    name: req.query.name,
  });
});

// 404 handler
app.use(handle404);

// 500 handler
app.use(handle500);

/**
 * Starts the Express server.
 *
 * @param {number|string} port Port on which the server will listen.
 */
function start(port) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = {
  app,
  start,
};