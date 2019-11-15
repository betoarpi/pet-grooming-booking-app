const express = require('express');
const { config } = require('./config/index');

const app = express();

app.get('/', function(request, response) {
  response.send('Hello world');
});

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${config.port}`);
});
