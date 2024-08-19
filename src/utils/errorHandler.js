const logger = require('./logger')

const errorHandler = (err, req, res, next) => {
  logger.error(err.message, err)
  res.status(500).json({
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  })
}

module.exports = errorHandler
