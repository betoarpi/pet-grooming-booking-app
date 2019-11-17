const { MongoConnection } = require('../lib/mongo');

class PetService {
  constructor() {
    this.collection = 'pets';
    this.mongoDB = new MongoConnection();
  }

  async getPets() {
    const pets = await this.mongoDB.getAll(this.collection);
    return pets || [];
  }

  async getPet({ petId }) {
    const pet = await this.mongoDB.getById(this.collection, petId);
    return pet || {};
  }

  async createPet({ pet }) {
    const createdId = await this.mongoDB.create(this.collection, pet);
    return createdId;
  }

  async updatePet({ petId, pet }) {
    const updatedId = await this.mongoDB.update(this.collection, petId, pet);
    return updatedId;
  }

  async deletePet({ petId }) {
    const deletedId = await this.mongoDB.delete(this.collection, petId);
    return deletedId;
  }
}

module.exports = PetService;
