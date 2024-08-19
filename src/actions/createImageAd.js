// src/actions/createImageAd.js
const client = require('../utils/apiClient')
const logger = require('../utils/logger')

/**
 * Creates an image ad using the Google Ads API.
 *
 * @param {Object} payload - The payload containing the details for the image ad.
 * @param {string} payload.headline - The headline of the ad.
 * @param {string} payload.description - The description of the ad.
 * @param {string} payload.imageUrl - The URL of the image to be used in the ad.
 * @returns {Promise<Object>} The response from the Google Ads API.
 * @throws Will throw an error if the image ad creation fails.
 */

async function createImageAd(payload) {
  try {
    const response = await client.customers.createCustomerClient(payload)
    return response
  } catch (error) {
    logger.error('Error creating image ad:', error)
    throw error
  }
}

module.exports = createImageAd
