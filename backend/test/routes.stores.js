const proxyquire = require('proxyquire');
const assert = require('assert');
const testServer = require('../utils/testServer');
const { storeMocks, StoreServiceMocks } = require('../utils/mocks/stores');

describe('routes - stores', function() {
  const route = proxyquire('../routes/stores', {
    '../services/stores': StoreServiceMocks
  });

  const request = testServer(route);

  describe('GET /STORES', function() {
    it('Should respond with status 200', function(done) {
      request.get('/api/stores').expect(200, done);
    });

    it('Should respond with stores list', function(done) {
      request.get('/api/stores').end((error, response) => {
        if (error) {
          assert.fail(error);
        }
        assert.deepEqual(response.body, {
          data: storeMocks,
          message: 'stores listed'
        });
        done();
      });
    });
  });

  describe('GET /STORES/:storeId', function() {
    it('Should responde with status 200', function(done) {
      request.get(`/api/stores/${storeMocks[0]._id}`).expect(200, done);
    });

    it('Should responde with store', function(done) {
      request.get(`/api/stores/${storeMocks[0]._id}`).end((error, response) => {
        if (error) {
          assert.fail(error);
        }

        assert.deepEqual(response.body, {
          data: storeMocks[0],
          message: 'store retrieved'
        });
        done();
      });
    });
  });
});
