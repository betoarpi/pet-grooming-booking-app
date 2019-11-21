require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
  apiUrl: process.env.API_URL,
  clientApiKeyToken: process.env.CLIENT_API_KEY_TOKEN,
};

module.exports = { config };
