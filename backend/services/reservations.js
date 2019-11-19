const { MongoConnection } = require('../lib/mongo');

class ReservationService {
  constructor() {
    this.collection = 'reservations';
    this.mongoDB = new MongoConnection();
  }

  async getReservations() {
    const reservations = await this.mongoDB.getAll(this.collection);
    return reservations || [];
  }

  async getReservation({ reservationId }) {
    const reservation = await this.mongoDB.getById(
      this.collection,
      reservationId
    );
    return reservation || {};
  }

  async createReservation({ reservation }) {
    const createdId = await this.mongoDB.create(this.collection, reservation);
    return createdId;
  }

  async updateReservation({ reservationId, reservation }) {
    const updatedId = await this.mongoDB.update(
      this.collection,
      reservationId,
      reservation
    );
    return updatedId;
  }

  async deleteReservation({ reservationId }) {
    const deletedId = await this.mongoDB.delete(this.collection, reservationId);
    return deletedId;
  }
}

module.exports = ReservationService;
