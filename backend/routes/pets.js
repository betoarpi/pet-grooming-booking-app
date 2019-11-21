const express = require('express');
const PetService = require('../services/pets');
const validationHandler = require('../utils/middleware/validationHandler');
const {
  petIdSchema,
  createPetSchema,
  updatePetSchema
} = require('../utils/schemas/pet');

function petAPI(app) {
  const router = express.Router();
  const petService = new PetService();

  /*==========================MASTER ROUTE==========================*/
  app.use('/api/pets', router);

  /*==========================GET RESOURCES=========================*/
  router.get('/', async (request, response, next) => {
    try {
      const pets = await petService.getPets();
      response.status(200).json({
        data: pets,
        message: 'pets listed'
      });
    } catch (error) {
      next(error);
    }
  });

  /*==========================GET RESOURCE==========================*/
  router.get(
    '/:petId',
    validationHandler({ petId: petIdSchema }, 'params'),
    async (request, response, next) => {
      const { petId } = request.params;
      try {
        const pet = await petService.getPet({ petId });
        response.status(200).json({
          data: pet,
          message: 'pet retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================CREATE RESOURCE=======================*/
  router.post(
    '/',
    validationHandler(createPetSchema),
    async (request, response, next) => {
      const { body: pet } = request;
      try {
        const createdId = await petService.createPet({ pet });
        response.status(201).json({
          data: createdId,
          message: 'pet created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================UPDATE RESOURCE=======================*/
  router.put(
    '/:petId',
    validationHandler({ petId: petIdSchema }, 'params'),
    validationHandler(updatePetSchema),
    async (request, response, next) => {
      const { petId } = request.params;
      const { body: pet } = request;
      try {
        const updatedId = await petService.updatePet({
          petId,
          pet
        });
        response.status(200).json({
          data: updatedId,
          message: 'pet updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================DELETE RESOURCE=======================*/
  router.delete(
    '/:petId',
    validationHandler({ petId: petIdSchema }, 'params'),
    async (request, response, next) => {
      const { petId } = request.params;
      try {
        const deletedId = await petService.deletePet({ petId });
        response.status(200).json({
          data: deletedId,
          message: 'pet deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = petAPI;
