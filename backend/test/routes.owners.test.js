const proxyquire = require('proxyquire');
const assert = require('assert');
const testServer = require('../utils/testServer');
const { ownerMocks, OwnersServiceMocks } = require('../utils/mocks/owners');

describe('routes - owners', function() {
  const route = proxyquire('../routes/owners', {
    '../services/owners': OwnersServiceMocks
  });

  const request = testServer(route);

  describe('GET /STORES', function() {
    it('Should respond with status 200', function(done) {
      request.get('/api/owners').expect(200, done);
    });

    it('Should respond with owners list', function(done) {
      request.get('/api/owners').end((error, response) => {
        if (error) {
          assert.fail(error);
        }
        assert.deepEqual(response.body, {
          data: ownerMocks,
          message: 'owners listed'
        });
        done();
      });
    });
  });

  describe('GET /STORES/:ownerId', function() {
    it('Should responde with status 200', function(done) {
      request.get(`/api/owners/${ownerMocks[0]._id}`).expect(200, done);
    });

    it('Should responde with owner', function(done) {
      request.get(`/api/owners/${ownerMocks[0]._id}`).end((error, response) => {
        if (error) {
          assert.fail(error);
        }

        assert.deepEqual(response.body, {
          data: ownerMocks[0],
          message: 'owner retrieved'
        });
        done();
      });
    });
  });
});
