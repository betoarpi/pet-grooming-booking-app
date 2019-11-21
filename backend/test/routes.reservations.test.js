const proxyquire = require('proxyquire');
const assert = require('assert');
const testServer = require('../utils/testServer');
const {
  reservationMocks,
  ReservationServiceMocks
} = require('../utils/mocks/reservations');

describe('routes - reservations', function() {
  const route = proxyquire('../routes/reservations', {
    '../services/reservations': ReservationServiceMocks
  });

  const request = testServer(route);

  describe('GET /RESERVATIONS', function() {
    it('Should respond with status 200', function(done) {
      request.get('/api/reservations').expect(200, done);
    });

    it('Should respond with reservations list', function(done) {
      request.get('/api/reservations').end((error, response) => {
        if (error) {
          assert.fail(error);
        }
        assert.deepEqual(response.body, {
          data: reservationMocks,
          message: 'reservations listed'
        });
        done();
      });
    });
  });

  describe('GET /RESERVATIONS/:reservationId', function() {
    it('Should responde with status 200', function(done) {
      request
        .get(`/api/reservations/${reservationMocks[0]._id}`)
        .expect(200, done);
    });

    it('Should responde with reservation', function(done) {
      request
        .get(`/api/reservations/${reservationMocks[0]._id}`)
        .end((error, response) => {
          if (error) {
            assert.fail(error);
          }

          assert.deepEqual(response.body, {
            data: reservationMocks[0],
            message: 'reservation retrieved'
          });
          done();
        });
    });
  });
});
