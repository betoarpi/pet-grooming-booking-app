require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
  ownerApiKeyToken: process.env.OWNER_API_KEY_TOKEN,
  clientApiKeyToken: process.env.CLIENT_API_KEY_TOKEN
};

module.exports = { config };
