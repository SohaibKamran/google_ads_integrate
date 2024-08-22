# Google Ads Integration

## Overview

This project demonstrates integration with the Google Ads API using Node.js. It includes functionalities like creating an audience, creating an image ad, and handling other actions related to Google Ads.

### Features

- Create, update, and manage audiences.
- Create and manage image ads.
- Robust error handling with retry logic for server errors.

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

## How & Where to Get API Keys for this project

To use the Google Ads API in your project, you'll need to obtain several API keys and tokens. Below are the steps to get each of the required credentials:

### 1. Google Ads Client ID and Client Secret
- **Step 1:** Go to the [Google Cloud Console](https://console.cloud.google.com/).
- **Step 2:** Create a new project or select an existing one.
- **Step 3:** Navigate to **APIs & Services > Credentials**.
- **Step 4:** Click on **Create Credentials** and select **OAuth 2.0 Client ID**.
- **Step 5:** Configure the consent screen and then create the credentials. Once created, you will see the **Client ID** and **Client Secret**.

### 2. Google Ads Developer Token
- **Step 1:** Log in to your [Google Ads Account](https://ads.google.com/).
- **Step 2:** Navigate to **Tools & Settings > Setup > API Center**.
- **Step 3:** You will find your **Developer Token** here. If it’s not yet approved, request access, and follow the process.

### 3. Google Ads Refresh Token
- **Step 1:** Use the **Client ID** and **Client Secret** obtained earlier to initiate the OAuth2 flow.
- **Step 2:** Exchange the authorization code for a **Refresh Token** using a POST request to Google's OAuth2 endpoint.

### 4. Google Ads Customer ID
- **Step 1:** This is your Google Ads account ID, which you can find in the top-right corner of your Google Ads dashboard.

### 5. Setting Up Your Environment Variables
After obtaining the above credentials, you should create a .env file and add them to your `.env` file like this:

```plaintext
GOOGLE_ADS_CLIENT_ID=your-client-id
GOOGLE_ADS_CLIENT_SECRET=your-client-secret
GOOGLE_ADS_DEVELOPER_TOKEN=your-developer-token
GOOGLE_ADS_REFRESH_TOKEN=your-refresh-token
GOOGLE_ADS_CUSTOMER_ID=your-customer-id
PORT=3000
```
## Sample API Endpoints provided in this nodejs app with payload examples

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
## Running the Campaign Script

To test the end-to-end process of setting up a new ad campaign, creating an image ad, and pushing the ad live, you can run the provided campaign script.
**Run the campaign file:**

 ```sh$
node src/runCampaign.js
 ```

### Add these scripts to your Package.json to run the app directly

```json
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  }
```
