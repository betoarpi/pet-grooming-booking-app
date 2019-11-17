const assert = require('assert');
const proxyquire = require('proxyquire');
const testServer = require('../utils/testServer');
const { petsMocks, PetsServiceMocks } = require('../utils/mocks/pets');

describe('routes - pets', function() {
  const route = proxyquire('../routes/pets', {
    '../services/pets': PetsServiceMocks
  });

  const request = testServer(route);

  describe('GET /PETS', function() {
    it('Should responde with status 200', function(done) {
      request.get('/api/pets').expect(200, done);
    });

    it('Should responde with pets list', function(done) {
      request.get('/api/pets').end((error, response) => {
        if (error) {
          assert.fail(error);
        }

        assert.deepEqual(response.body, {
          data: petsMocks,
          message: 'pets listed'
        });
        done();
      });
    });
  });

  describe('GET /PETS/:petId', function() {
    it('Should responde with status 200', function(done) {
      request.get(`/api/pets/${petsMocks[0]._id}`).expect(200, done);
    });

    it('Should responde with pet', function(done) {
      request.get(`/api/pets/${petsMocks[0]._id}`).end((error, response) => {
        if (error) {
          assert.fail(error);
        }

        assert.deepEqual(response.body, {
          data: petsMocks[0],
          message: 'pet retrieved'
        });
        done();
      });
    });
  });
});
