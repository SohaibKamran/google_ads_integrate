const client = require('../utils/apiClient')
const logger = require('../utils/logger')

/**
 * Executes another action using the Google Ads API.
 *
 * @param {Object} payload - The payload containing the details for the action.
 * @returns {Promise<Object>} The response from the Google Ads API.
 * @throws Will throw an error if the action fails.
 */
async function otherAction(payload) {
  try {
    const response = await client.customers.createCustomerClient(payload)
    return response
  } catch (error) {
    logger.error('Error performing action:', error)
    throw error
  }
}

module.exports = otherAction
