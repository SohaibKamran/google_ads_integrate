const client = require('../utils/apiClient')
const logger = require('../utils/logger')
/**
 * Creates a customer client using the provided payload.
 *
 * @param {Object} payload - This is the main req obj coming from api req and it contains these items below.
 * 
 * @param {string} payload.name - The name of the customer.
 * @param {Array<Object>} payload.members - An array of member objects.
 * @param {string} payload.members[].memberId - The ID of the member.
 * 
 * @returns {Promise<Object>} - This method returns a promise that resolves to the response object from the Google Ads API.
 * @throws {Error} - Will throw an error if the image ad creation fails.

 * @example
 * const payload = {
 *   name: 'Customer Name',
 *   members: [
 *     { memberId: '12345' },
 *     { memberId: '67890' }
 *   ]
 * };
 *
 * createCustomerClient(payload)
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 */
async function createCustomerAction(payload) {
  try {
    const response = await client.customers.createCustomerClient(payload)
    return response
  } catch (error) {
    logger.error('Error performing action:', error)
    throw error
  }
}

module.exports = otherAction
