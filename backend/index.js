const express = require('express');
const { config } = require('./config/index');
const clientsAPI = require('./routes/clients');
const petAPI = require('./routes/pets');
const storeAPI = require('./routes/stores');
const ownerAPI = require('./routes/owners');
const reservationAPI = require('./routes/reservations');
const authAPI = require('./routes/auth');

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
//Pet Routes
petAPI(app);
//Store Routes
storeAPI(app);
//Owner Routes
ownerAPI(app);
//Reservation Routes
reservationAPI(app);
//Auth Routes
authAPI(app);

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
