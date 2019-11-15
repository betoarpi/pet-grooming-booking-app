const { MongoConnection } = require('./mongo');

const connection = new MongoConnection();
connection
  .connect()
  .then(db => process.exit())
  .catch(error => process.exit(error));
