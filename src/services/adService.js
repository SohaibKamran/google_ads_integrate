const createAudience = require('../actions/createAudience')
const createImageAd = require('../actions/createImageAd')
const otherAction = require('../actions/createCustomerAction')

/**
 * Service to handle business logic for creating an audience.
 *
 * @param {Object} payload - The payload containing audience details.
 * @returns {Promise<Object>} The response from the action.
 */
const createAudienceService = async payload => {
  return await createAudience(payload)
}

/**
 * Service to handle business logic for creating an image ad.
 *
 * @param {Object} payload - The payload containing image ad details.
 * @returns {Promise<Object>} The response from the action.
 */
const createImageAdService = async payload => {
  return await createImageAd(payload)
}

/**
 * Service to handle business logic for other actions.
 *
 * @param {Object} payload - The payload containing details for the action.
 * @returns {Promise<Object>} The response from the action.
 */
const otherActionService = async payload => {
  return await otherAction(payload)
}

module.exports = {
  createAudience: createAudienceService,
  createImageAd: createImageAdService,
  otherAction: otherActionService,
}
