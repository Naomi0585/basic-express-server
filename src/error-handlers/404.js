'use strict';

/**
 * Handles routes that do not exist.
 *
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 */
function handle404(req, res) {
  res.status(404).json({
    error: 404,
    message: 'Not Found',
  });
}

module.exports = handle404;