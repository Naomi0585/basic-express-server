'use strict';

/**
 * Logs the HTTP method and request path.
 *
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @param {Function} next Moves request to the next middleware.
 */
function logger(req, res, next) {
  console.log(`${req.method} ${req.path}`);
  next();
}

module.exports = logger;