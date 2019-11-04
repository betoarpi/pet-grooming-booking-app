require('dotenv').config();

const config = {
  mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
};

module.exports = { config };
