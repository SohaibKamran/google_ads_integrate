/**
 * Middleware to validate request payload using a Joi schema.
 *
 * @param {Object} schema - Joi schema to validate the request payload.
 * @returns {Function} Express middleware function.
 */
const validatePayload = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }
    next()
  }
}

module.exports = validatePayload
