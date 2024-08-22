// src/runCampaign.js

// Import the required services and utilities
/**
 * Runs the campaign process, creating an audience and an image ad.
 * Logs the progress and any errors that occur.
 *
 * @throws {Error} If any step in the campaign process fails.
 */
const adService = require('./services/adService')
const logger = require('./utils/logger')

async function runCampaign() {
  try {
    // Step 1: Create an Audience
    const audiencePayload = {
      name: 'Test Audience',
      members: [{ memberId: '12345' }, { memberId: '67890' }],
    }
    console.log('audiencePayload === ', audiencePayload)

    const audienceResponse = await adService.createAudience(audiencePayload)
    logger.info('Audience created successfully:', audienceResponse)

    // Step 2: Create an Image Ad
    const imageAdPayload = {
      headline: 'Buy Now!',
      description: 'Best product ever.',
      imageUrl: 'https://example.com/image.jpg',
    }
    const imageAdResponse = await adService.createImageAd(imageAdPayload)
    logger.info('Image ad created successfully:', imageAdResponse)

    // Add Step 3 here to push the ad live if required
    // This step depends on the implementation of your ad platform.
  } catch (error) {
    logger.error('Error in campaign process:', error)
  }
}

// Run the campaign process
runCampaign()
