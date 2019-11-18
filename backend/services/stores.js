const { MongoConnection } = require('../lib/mongo');

class StoreService {
  constructor() {
    this.collection = 'stores';
    this.mongoDB = new MongoConnection();
  }

  async getStores() {
    const stores = await this.mongoDB.getAll(this.collection);
    return stores || [];
  }

  async getStore({ storeId }) {
    const store = await this.mongoDB.getById(this.collection, storeId);
    return store || {};
  }

  async createStore({ store }) {
    const createdId = await this.mongoDB.create(this.collection, store);
    return createdId;
  }

  async updateStore({ storeId, store }) {
    const updatedId = await this.mongoDB.update(
      this.collection,
      storeId,
      store
    );
    return updatedId;
  }

  async deleteStore({ storeId }) {
    const deletedId = await this.mongoDB.delete(this.collection, storeId);
    return deletedId;
  }
}

module.exports = StoreService;
