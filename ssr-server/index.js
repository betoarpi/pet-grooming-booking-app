const express = require('express');

const { config } = require('./config');

const app = express();

// body parser
app.use(express.json());

app.post('/auth/sign-in', async (request, response, next) => {});

app.post('/auth/sign-up', async (request, response, next) => {});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
