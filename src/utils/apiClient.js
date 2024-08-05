// src/utils/apiClient.js
const { GoogleAdsApi } = require('google-ads-api');
require('dotenv').config();

const client = new GoogleAdsApi({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    developer_token: process.env.DEVELOPER_TOKEN,
});

module.exports = client;
