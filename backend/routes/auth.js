const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeyService = require('../services/apiKeys');
const { config } = require('../config/index');
const ClientService = require('../services/clients');
const validationHandler = require('../utils/middleware/validationHandler');
const {
  createClientSchema,
  createProviderClientSchema
} = require('../utils/schemas/client');

// Basic strategy
require('../utils/auth/strategies/basic');

function authAPI(app) {
  const router = express.Router();
  const apiKeyService = new ApiKeyService();
  const clientService = new ClientService();

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

  router.post('/sign-up', validationHandler(createClientSchema), async function(
    request,
    response,
    next
  ) {
    const { body: client } = request;
    try {
      const createdClientId = await clientService.createClient({ client });
      response.status(201).json({
        data: createdClientId,
        message: 'client created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post(
    '/sign-provider',
    validationHandler(createProviderClientSchema),
    async function(request, response, next) {
      const { body } = request;
      const { apiKeyToken, ...client } = body;
      if (!apiKeyToken) {
        next(boom.unauthorized('apiKeyToken is required'));
      }

      try {
        const queriedUser = await clientService.getOrCreateClient({
          client
        });

        const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });
        if (!apiKey) {
          next(boom.unauthorized());
        }

        const { _id: id, username, email } = queriedUser;

        const payload = {
          sub: id,
          username,
          email,
          scopes: apiKey.scopes
        };

        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: '15m'
        });
        const user = { id, username, email };
        response.status(200).json({ token, user });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = authAPI;
