const adService = require('../services/adService')

/**
 * Controller to handle the creation of an audience.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>}
 */
const createAudience = async (req, res) => {
  try {
    const response = await adService.createAudience(req.body)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

/**
 * Controller to handle the creation of an image ad.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>}
 */
const createImageAd = async (req, res) => {
  try {
    const response = await adService.createImageAd(req.body)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

/**
 * Controller to handle other actions.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>}
 */
const otherAction = async (req, res) => {
  try {
    const response = await adService.otherAction(req.body)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createAudience,
  createImageAd,
  otherAction,
}
