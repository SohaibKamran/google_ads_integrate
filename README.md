# Google Ads Integration

## Overview

This project demonstrates integration with the Google Ads API using Node.js. It includes functionalities like creating an audience, creating an image ad, and handling other actions related to Google Ads.

### Features

- Create, update, and manage audiences.
- Create and manage image ads.
- Robust error handling with retry logic for server errors.

## API Endpoints

### Create Audience
**URL:** `/api/create-audience`  
**Method:** `POST`  
**Payload:**
```json
{
  "name": "Audience Name",
  "members": [
    { "memberId": "12345" },
    { "memberId": "67890" }
  ]
}
```

### Create Image Ad
**URL:** `/api/create-image-ad`  
**Method:** `POST`  
**Payload:**
```json
{
  "headline": "Ad Headline",
  "description": "Ad Description",
  "imageUrl": "https://example.com/image.jpg"
}
```

## Prerequisites

- **Node.js** (>=14.x)
- **npm** (>=6.x)
- **Google Ads API** credentials (client ID, client secret, developer token, refresh token, customer ID)

## Project Structure

```plaintext
google_ads_integrate/
├── src/
│   ├── actions/           # Contains business logic for interacting with Google Ads API
│   │   ├── createAudience.js
│   │   ├── createImageAd.js
│   │   └── otherActions.js
│   ├── controllers/       # Handles HTTP requests and responses
│   │   └── adController.js
│   ├── services/          # Provides abstraction over the actions layer
│   │   └── adService.js
│   ├── utils/             # Utility functions (API client, logger, etc.)
│   │   ├── apiClient.js
│   │   ├── logger.js
│   │   └── errorHandler.js
│   ├── middlewares/       # Middleware functions for validation, etc.
│   │   └── validatePayload.js
│   ├── routes/            # API routes definition
│   │   └── adRoutes.js
│   ├── config/            # Configuration files (e.g., Google Ads API configuration)
│   │   └── googleAdsConfig.js
│   └── index.js           # Entry point of the application
├── .env                   # Environment variables
├── .gitignore             # Files and directories to be ignored by Git
├── nodemon.json           # Configuration for Nodemon
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Lock file for npm dependencies
└── README.md              # Project documentation
```

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/SohaibKamran/google_ads_integrate.git
   cd google_ads_integrate
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create an `.env` file in the root directory and add your Google Ads API credentials:**

   ```plaintext
   GOOGLE_ADS_CLIENT_ID=your-client-id
   GOOGLE_ADS_CLIENT_SECRET=your-client-secret
   GOOGLE_ADS_DEVELOPER_TOKEN=your-developer-token
   GOOGLE_ADS_REFRESH_TOKEN=your-refresh-token
   GOOGLE_ADS_CUSTOMER_ID=your-customer-id
   PORT=3000
   ```

## Running the App

To run the app locally, use the following scripts:

1. **Start the server:**

   ```sh
   npm run start
   ```

2. **Start with hot reloading:**

   ```sh
   npm run dev
   ```
## Running the Campaign Script

To test the end-to-end process of setting up a new ad campaign, creating an image ad, and pushing the ad live, you can run the provided campaign script.
**Run the campaign file:**

 ```sh$
node src/runCampaign.js
 ```

### Package.json Scripts

Add the following scripts to your `package.json`:

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
```
