require('dotenv').config();

const config = {
  mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
};

module.exports = { config };
