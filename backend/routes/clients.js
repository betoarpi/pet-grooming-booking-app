const express = require('express');
const ClientService = require('../services/clients');
const {
  clientIdSchema,
  createClientSchema,
  updateClientSchema
} = require('../utils/schemas/client');
const validationHandler = require('../utils/middleware/validationHandler');

function clientsAPI(app) {
  const router = express.Router();
  const clientService = new ClientService();
  /*==========================MASTER ROUTE==========================*/
  app.use('/api/clients', router);

  /*==========================GET RESOURCES=========================*/
  router.get('/', async (request, response, next) => {
    try {
      const clients = await clientService.getClients();
      response.status(200).json({
        data: clients,
        message: 'clients listed'
      });
    } catch (error) {
      next(error);
    }
  });

  /*==========================GET RESOURCE==========================*/
  router.get(
    '/:clientId',
    validationHandler({ clientId: clientIdSchema }, 'params'),
    async (request, response, next) => {
      const { clientId } = request.params;
      try {
        const client = await clientService.getClient({ clientId });
        response.status(200).json({
          data: client,
          message: 'client retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================CREATE RESOURCE=======================*/
  router.post(
    '/',
    validationHandler(createClientSchema),
    async (request, response, next) => {
      const { body: client } = request;
      try {
        const createdId = await clientService.createClient({ client });
        response.status(201).json({
          data: createdId,
          message: 'client created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================UPDATE RESOURCE=======================*/
  router.put(
    '/:clientId',
    validationHandler({ clientId: clientIdSchema }, 'params'),
    validationHandler(updateClientSchema),
    async (request, response, next) => {
      const { clientId } = request.params;
      const { body: client } = request;
      try {
        const updatedId = await clientService.updateClient({
          clientId,
          client
        });
        response.status(200).json({
          data: updatedId,
          message: 'client updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================DELETE RESOURCE=======================*/
  router.delete(
    '/:clientId',
    validationHandler({ clientId: clientIdSchema }, 'params'),
    async (request, response, next) => {
      const { clientId } = request.params;
      try {
        const deletedId = await clientService.deleteClient({ clientId });
        response.status(200).json({
          data: deletedId,
          message: 'client deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = clientsAPI;
