// src/actions/createAudience.js
const client = require('../utils/apiClient');
const logger = require('../utils/logger');

async function createAudience(payload) {
    try {
        const response = await client.customers.createCustomerClient(payload);
        return response;
    } catch (error) {
        logger.error('Error creating audience:', error);
        throw error;
    }
}

module.exports = createAudience;
