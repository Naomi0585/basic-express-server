'use strict';

/**
 * Validates that a name exists in the query string.
 *
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @param {Function} next Moves request forward or sends an error.
 */
function validator(req, res, next) {
  if (!req.query.name) {
    next(new Error('Name is required'));
  } else {
    next();
  }
}

module.exports = validator;