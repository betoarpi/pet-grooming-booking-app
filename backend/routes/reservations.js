const express = require('express');
const ReservationService = require('../services/reservations');
const validationHandler = require('../utils/middleware/validationHandler');
const {
  reservationIdSchema,
  createReservationSchema,
  updateReservationSchema
} = require('../utils/schemas/reservation');

function reservationAPI(app) {
  const router = express.Router();
  const reservationService = new ReservationService();

  /*==========================MASTER ROUTE==========================*/
  app.use('/api/reservations', router);

  /*==========================GET RESOURCES=========================*/
  router.get('/', async (request, response, next) => {
    try {
      const reservations = await reservationService.getReservations();
      response.status(200).json({
        data: reservations,
        message: 'reservations listed'
      });
    } catch (error) {
      next(error);
    }
  });

  /*==========================GET RESOURCE==========================*/
  router.get(
    '/:reservationId',
    validationHandler({ reservationId: reservationIdSchema }, 'params'),
    async (request, response, next) => {
      const { reservationId } = request.params;
      try {
        const reservation = await reservationService.getReservation({
          reservationId
        });
        response.status(200).json({
          data: reservation,
          message: 'reservation retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================CREATE RESOURCE=======================*/
  router.post(
    '/',
    validationHandler(createReservationSchema),
    async (request, response, next) => {
      const { body: reservation } = request;
      try {
        const createdId = await reservationService.createReservation({
          reservation
        });
        response.status(201).json({
          data: createdId,
          message: 'reservation created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================UPDATE RESOURCE=======================*/
  router.put(
    '/:reservationId',
    validationHandler({ reservationId: reservationIdSchema }, 'params'),
    validationHandler(updateReservationSchema),
    async (request, response, next) => {
      const { reservationId } = request.params;
      const { body: reservation } = request;
      try {
        const updatedId = await reservationService.updateReservation({
          reservationId,
          reservation
        });
        response.status(200).json({
          data: updatedId,
          message: 'reservation updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  /*==========================DELETE RESOURCE=======================*/
  router.delete(
    '/:reservationId',
    validationHandler({ reservationId: reservationIdSchema }, 'params'),
    async (request, response, next) => {
      const { reservationId } = request.params;
      try {
        const deletedId = await reservationService.deleteReservation({
          reservationId
        });
        response.status(200).json({
          data: deletedId,
          message: 'reservation deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = reservationAPI;
