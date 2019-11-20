const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeyService = require('../services/apiKeys');
const { config } = require('../config/index');

// Basic strategy
require('../utils/auth/strategies/basic');

function authAPI(app) {
  const router = express.Router();
  const apiKeyService = new ApiKeyService();
  app.use('/api/auth', router);

  router.post('/sign-in', async function(request, response, next) {
    const { apiKeyToken } = request.body;
    if (!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
    }

    passport.authenticate('basic', function(error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        request.login(user, { session: false }, async function(error) {
          if (error) {
            next(error);
          }
          const apiKey = await apiKeyService.getApiKey({
            token: apiKeyToken
          });

          if (!apiKey) {
            next(boom.unauthorized());
          }
          const { _id: id, username, email } = user;

          const payload = {
            sub: id,
            username,
            email,
            scopes: apiKey.scopes
          };

          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '15m'
          });

          return response.status(200).json({
            token,
            user: { id, username, email }
          });
        });
      } catch (error) {
        next(error);
      }
    })(request, response, next);
  });
}

module.exports = authAPI;
