// src/actions/createAudience.js
const client = require('../utils/apiClient')
const logger = require('../utils/logger')

/**
 * Creates an audience in Google Ads.
 *
 * @param {Object} payload - The data required to create the audience.
 * @param {string} payload.name - The name of the audience.
 * @param {Array<Object>} payload.members - The members to be included in the audience.
 * @returns {Promise<Object>} - The response from the Google Ads API.
 * @throws {Error} - Throws an error if the audience creation fails.
 */
async function createAudience(payload) {
  try {
    const response = await client.customers.createCustomerClient(payload)
    return response
  } catch (error) {
    logger.error('Error creating audience:', error)
    throw error
  }
}

module.exports = createAudience
