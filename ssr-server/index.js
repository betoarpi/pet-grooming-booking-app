const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const boom = require('@hapi/boom');
const axios = require('axios');
const { config } = require('./config');

const app = express();

//BODY PARSER
app.use(express.json());
//COOKIE PARSER
app.use(cookieParser());
//BASIC STRATEGY
require('./utils/auth/strategies/basic');

app.post('/auth/sign-in', async (request, response, next) => {
  passport.authenticate('basic', (error, data) => {
    console.log(data);
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      request.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        response.cookie('token', token, {
          httpOnly: !config.dev,
          secure: !config.dev,
        });

        response.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(request, response, next);
});

app.post('/auth/sign-up', async (request, response, next) => {
  const { body: client } = request;
  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: client,
    });

    response.status(201).json({ message: 'client created' });
  } catch (error) {
    next(error);
  }
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
