'use strict';

/**
 * Handles server errors.
 *
 * @param {Error} err Error passed from middleware.
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @param {Function} next Express next function.
 */
function handle500(err, req, res, next) {
  res.status(500).json({
    error: 500,
    message: 'Server Error',
  });
}

module.exports = handle500;