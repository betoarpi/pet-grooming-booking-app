const express = require('express');
const OwnerService = require('../services/owners');
const validationHandler = require('../utils/middleware/validationHandler');
const {
  ownerIdSchema,
  createOwnerSchema,
  updateOwnerSchema
} = require('../utils/schemas/owner');

function ownerAPI(app) {
  const router = express.Router();
  const ownerService = new OwnerService();

  /*==========================MASTER ROUTE==========================*/
  app.use('/api/owners', router);

  /*==========================GET RESOURCES=========================*/
  router.get('/', async (request, response, next) => {
    try {
      const owners = await ownerService.getOwners();
      response.status(200).json({
        data: owners,
        message: 'owners listed'
      });
    } catch (error) {
      next(error);
    }
  });

  /*==========================GET RESOURCE==========================*/
  router.get(
    '/:ownerId',
    validationHandler({ ownerId: ownerIdSchema }, 'params'),
    async (request, response, next) => {
      const { ownerId } = request.params;
      try {
        const owner = await ownerService.getOwner({ ownerId });
        response.status(200).json({
          data: owner,
          message: 'owner retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================CREATE RESOURCE=======================*/
  router.post(
    '/',
    validationHandler(createOwnerSchema),
    async (request, response, next) => {
      const { body: owner } = request;
      try {
        const createdId = await ownerService.createOwner({ owner });
        response.status(201).json({
          data: createdId,
          message: 'owner created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================UPDATE RESOURCE=======================*/
  router.put(
    '/:ownerId',
    validationHandler({ ownerId: ownerIdSchema }, 'params'),
    validationHandler(updateOwnerSchema),
    async (request, response, next) => {
      const { ownerId } = request.params;
      const { body: owner } = request;
      try {
        const updatedId = await ownerService.updateOwner({
          ownerId,
          owner
        });
        response.status(200).json({
          data: updatedId,
          message: 'owner updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================DELETE RESOURCE=======================*/
  router.delete(
    '/:ownerId',
    validationHandler({ ownerId: ownerIdSchema }, 'params'),
    async (request, response, next) => {
      const { ownerId } = request.params;
      try {
        const deletedId = await ownerService.deleteOwner({ ownerId });
        response.status(200).json({
          data: deletedId,
          message: 'owner deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = ownerAPI;
