const { MongoConnection } = require('./mongo');

const connection = new MongoConnection();
connection
  .connect()
  .then(db => {
    console.log('    Connection was successfully :D');
    process.exit(0);
  })
  .catch(error => {
    console.log('    Connection is wrong :C');
    console.log(error);
    process.exit(0);
  });
