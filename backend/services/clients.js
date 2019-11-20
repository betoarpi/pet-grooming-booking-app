const bcrypt = require('bcrypt');
const { MongoConnection } = require('../lib/mongo');

class ClientService {
  constructor() {
    this.collection = 'clients';
    this.mongoDB = new MongoConnection();
  }

  async getClients() {
    const clients = await this.mongoDB.getAll(this.collection);
    return clients || [];
  }

  async getClient({ clientId }) {
    const client = await this.mongoDB.getById(this.collection, clientId);
    return client || {};
  }

  async getClientByEmail({ email }) {
    const [client] = await this.mongoDB.getAll(this.collection, { email });
    return client || {};
  }

  async createClient({ client }) {
    const { email, username, password } = client;
    const passwordCrypt = await bcrypt.hash(password, 12);
    const createdId = await this.mongoDB.create(this.collection, {
      email,
      username,
      password: passwordCrypt
    });
    return createdId;
  }

  async updateClient({ clientId, client }) {
    const updatedId = await this.mongoDB.update(
      this.collection,
      clientId,
      client
    );
    return updatedId;
  }

  async deleteClient({ clientId }) {
    const deletedId = await this.mongoDB.delete(this.collection, clientId);
    return deletedId;
  }
}

module.exports = ClientService;
