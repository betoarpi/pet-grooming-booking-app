const crypto = require('crypto');
const { MongoConnection } = require('../../lib/mongo');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'create:clients',
  'read:clients',
  'update:clients',
  'delete:clients',
  'create:owners',
  'read:owners',
  'update:owners',
  'delete:owners',
  'create:reservations',
  'read:reservations',
  'update:reservations',
  'delete:reservations',
  'create:stores',
  'read:stores',
  'update:stores',
  'delete:stores',
  'create:pets',
  'read:pets',
  'update:pets',
  'delete:pets'
];
const ownerScopes = [
  'signin:auth',
  'signup:auth',
  'read:reservations',
  'update:stores'
];

const clientScopes = [
  'signin:auth',
  'signup:auth',
  'create:reservations',
  'read:reservations',
  'create:pets',
  'read:pets',
  'update:pets'
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    token: generateRandomToken(),
    scopes: ownerScopes
  },
  {
    token: generateRandomToken(),
    scopes: clientScopes
  }
];

async function seedApiKeys() {
  try {
    const mongoDB = new MongoConnection();

    const promises = apiKeys.map(async apiKey => {
      await mongoDB.create('api-keys', apiKey);
    });

    await Promise.all(promises);
    console.log('api-key seeder success');
    return process.exit(0);
  } catch (error) {
    console.error('api-key seeder error !!!');
    console.error(error);
    process.exit(1);
  }
}

seedApiKeys();
