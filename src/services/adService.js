const createAudience = require('../actions/createAudience');
const createImageAd = require('../actions/createImageAd');
const otherAction = require('../actions/otherActions');

const adService = {
    createAudience: async (payload) => {
        // Add any additional business logic here
        return await createAudience(payload);
    },
    createImageAd: async (payload) => {
        // Add any additional business logic here
        return await createImageAd(payload);
    },
    otherAction: async (payload) => {
        // Add any additional business logic here
        return await otherAction(payload);
    },
};

module.exports = adService;
