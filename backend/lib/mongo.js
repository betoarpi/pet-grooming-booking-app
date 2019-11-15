const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index');

const USERNAME = encodeURIComponent(config.dbUsername);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_PORT = encodeURIComponent(config.dbPort);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;
const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoConnection {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoConnection.connection) {
      MongoConnection.connection = new Promise((resolve, reject) => {
        this.client.connect(error => {
          if (error) {
            console.log('    Connection is wrong :C');
            console.log(error);
            return reject(error);
          }
          console.log('    Connection was successfully :D');
          return resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoConnection.connection;
  }

  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }

  getById(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }

  create(collection, data) {
    return this.connect()
      .then(db => {
        return db.collection(collection).insertOne(data);
      })
      .then(result => result.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then(result => result.upsertedId || id);
  }

  delete(collection, id) {
    return this.connect()
      .then(db => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

module.exports = { MongoConnection };
