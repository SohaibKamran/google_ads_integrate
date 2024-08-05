// src/actions/otherActions.js
const client = require('../utils/apiClient');
const logger = require('../utils/logger');

async function otherAction(payload) {
    try {
        const response = await client.customers.createCustomerClient(payload);
        return response;
    } catch (error) {
        logger.error('Error performing action:', error);
        throw error;
    }
}

module.exports = otherAction;
