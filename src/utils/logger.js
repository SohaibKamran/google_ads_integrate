const winston = require('winston')

/**
 * Creates a logger instance using Winston.
 *
 * @type {winston.Logger}
 */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

module.exports = logger
