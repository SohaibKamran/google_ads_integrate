const { GoogleAdsApi } = require('google-ads-api')
require('dotenv').config()

/**
 * Creates an instance of the Google Ads API client.
 *
 * @type {GoogleAdsApi}
 */
const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
})

module.exports = client
