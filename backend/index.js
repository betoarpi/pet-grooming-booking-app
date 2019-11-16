const express = require('express');
const { config } = require('./config/index');
const clientsAPI = require('./routes/clients');
const {
  errorLog,
  errorWrapper,
  errorHandler
} = require('./utils/middleware/errorHandler');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

//Body parser
app.use(express.json());

//Client Routes
clientsAPI(app);

//NotFound Catcher
app.use(notFoundHandler);

//Error Middleware
app.use(errorLog);
app.use(errorWrapper);
app.use(errorHandler);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${config.port}`);
});
