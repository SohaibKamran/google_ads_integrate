const adService = require('../services/adService');

const createAudience = async (req, res) => {
    try {
        const response = await adService.createAudience(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createImageAd = async (req, res) => {
    try {
        const response = await adService.createImageAd(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const otherAction = async (req, res) => {
    try {
        const response = await adService.otherAction(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createAudience,
    createImageAd,
    otherAction,
};
