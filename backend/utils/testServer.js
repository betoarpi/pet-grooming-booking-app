const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const supertest = require('supertest');

function testServer(route) {
  const app = express();
  app.use(express.json());
  route(app);
  return supertest(app);
}

module.exports = testServer;
