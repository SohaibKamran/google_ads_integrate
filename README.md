# Google Ads Integration

This project demonstrates how to integrate with the Google Ads API using Node.js. It includes functionalities such as creating an audience, creating an image ad, and handling other actions.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)
- Google Ads API credentials

## Project folder structure
```plaintext
google_ads_integrate/
├── src/
│   ├── actions/
│   │   ├── createAudience.js
│   │   ├── createImageAd.js
│   │   └── otherActions.js
│   ├── controllers/
│   │   └── adController.js
│   ├── services/
│   │   └── adService.js
│   ├── utils/
│   │   ├── apiClient.js
│   │   ├── logger.js
│   │   └── errorHandler.js
│   ├── middlewares/
│   │   └── validatePayload.js
│   ├── routes/
│   │   └── adRoutes.js
│   ├── config/
│   │   └── googleAdsConfig.js
│   └── index.js
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── package-lock.json
└── README.md
```

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/ShoaibRasool6/google_ads_integrate.git
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

1. **Start the server with Nodemon for hot reloading:**

    ```sh
    npm run dev
    ```

2. **Start the server without Nodemon:**

    ```sh
    npm start
    ```

### Package.json Scripts

Add the following scripts to your `package.json`:

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
