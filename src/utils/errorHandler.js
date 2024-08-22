const logger = require('./logger')

/**
 * Global error handler middleware for Express.js.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
const errorHandler = (err, req, res, next) => {
  logger.error(err.message, err)
  res.status(500).json({
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  })
}

module.exports = errorHandler
