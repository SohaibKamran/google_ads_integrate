// src/actions/createImageAd.js
const client = require('../utils/apiClient');
const logger = require('../utils/logger');

async function createImageAd(payload) {
    try {
        const response = await client.customers.createCustomerClient(payload);
        return response;
    } catch (error) {
        logger.error('Error creating image ad:', error);
        throw error;
    }
}

module.exports = createImageAd;
