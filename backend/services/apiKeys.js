const { MongoConnection } = require('../lib/mongo');

class ApiKeyService {
  constructor() {
    this.collection = 'api-keys';
    this.mongoDB = new MongoConnection();
  }

  async getApiKey({ token }) {
    const [apiKey] = await this.mongoDB.getAll(this.collection, { token });
    return apiKey;
  }
}

module.exports = ApiKeyService;
