// src/utils/apiClient.js
const { GoogleAdsApi } = require('google-ads-api');
require('dotenv').config();

const client = new GoogleAdsApi({
    GOOGLE_ADS_CLIENT_ID: process.env.GOOGLE_ADS_CLIENT_ID,
    GOOGLE_ADS_CLIENT_SECRET: process.env.GOOGLE_ADS_CLIENT_SECRET,
    GOOGLE_ADS_DEVELOPER_TOKEN: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

module.exports = client;
