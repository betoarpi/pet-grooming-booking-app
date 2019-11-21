const express = require('express');
const StoreService = require('../services/stores');
const validationHandler = require('../utils/middleware/validationHandler');
const {
  storeIdSchema,
  createStoreSchema,
  updateStoreSchema
} = require('../utils/schemas/store');

function storeAPI(app) {
  const router = express.Router();
  const storeService = new StoreService();

  /*==========================MASTER ROUTE==========================*/
  app.use('/api/stores', router);

  /*==========================GET RESOURCES=========================*/
  router.get('/', async (request, response, next) => {
    try {
      const stores = await storeService.getStores();
      response.status(200).json({
        data: stores,
        message: 'stores listed'
      });
    } catch (error) {
      next(error);
    }
  });

  /*==========================GET RESOURCE==========================*/
  router.get(
    '/:storeId',
    validationHandler({ storeId: storeIdSchema }, 'params'),
    async (request, response, next) => {
      const { storeId } = request.params;
      try {
        const store = await storeService.getStore({ storeId });
        response.status(200).json({
          data: store,
          message: 'store retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================CREATE RESOURCE=======================*/
  router.post(
    '/',
    validationHandler(createStoreSchema),
    async (request, response, next) => {
      const { body: store } = request;
      try {
        const createdId = await storeService.createStore({ store });
        response.status(201).json({
          data: createdId,
          message: 'store created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================UPDATE RESOURCE=======================*/
  router.put(
    '/:storeId',
    validationHandler({ storeId: storeIdSchema }, 'params'),
    validationHandler(updateStoreSchema),
    async (request, response, next) => {
      const { storeId } = request.params;
      const { body: store } = request;
      try {
        const updatedId = await storeService.updateStore({
          storeId,
          store
        });
        response.status(200).json({
          data: updatedId,
          message: 'store updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================DELETE RESOURCE=======================*/
  router.delete(
    '/:storeId',
    validationHandler({ storeId: storeIdSchema }, 'params'),
    async (request, response, next) => {
      const { storeId } = request.params;
      try {
        const deletedId = await storeService.deleteStore({ storeId });
        response.status(200).json({
          data: deletedId,
          message: 'store deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = storeAPI;
