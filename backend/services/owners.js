const { MongoConnection } = require('../lib/mongo');

class OwnerService {
  constructor() {
    this.collection = 'owners';
    this.mongoDB = new MongoConnection();
  }

  async getOwners() {
    const owner = await this.mongoDB.getAll(this.collection);
    return owner || [];
  }

  async getOwner({ ownerId }) {
    const owner = await this.mongoDB.getById(this.collection, ownerId);
    return owner || {};
  }

  async createOwner({ owner }) {
    const createdId = await this.mongoDB.create(this.collection, owner);
    return createdId;
  }

  async updateOwner({ ownerId, owner }) {
    const updatedId = await this.mongoDB.update(
      this.collection,
      ownerId,
      owner
    );
    return updatedId;
  }

  async deleteOwner({ ownerId }) {
    const deletedId = await this.mongoDB.delete(this.collection, ownerId);
    return deletedId;
  }
}

module.exports = OwnerService;
