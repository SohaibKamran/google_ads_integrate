const client = require('../utils/apiClient')
const logger = require('../utils/logger')

/**
 * This function will creates an audience using the Google Ads API in Google Ad word dashboard.
 *
 * @param {Object} payload - The payload containing the details for the audience.
 * @param {string} payload.name - The name of the audience.
 * @param {Array<Object>} payload.members - The members to be included in the audience.
 * @param {string} payload.members[].memberId - The ID of a member.
 * @returns {Promise<Object>} The response from the Google Ads API.
 * @throws Will throw an error if audience creation fails.
 *  * @example
 * const payload = {
 *   name: 'Test Audience',
 *   members: [
 *     { memberId: '12345' },
 *     { memberId: '67890' }
 *   ],
 * };
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
