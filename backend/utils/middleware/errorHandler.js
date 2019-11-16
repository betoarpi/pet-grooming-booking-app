const boom = require('@hapi/boom');
const { config } = require('../../config/index');

function withErrorStack(error, stack) {
  if (config.dev) {
    return {
      ...error,
      stack
    };
  }

  return error;
}

function errorLog(error, request, response, next) {
  console.log(error);
  next(error);
}

function errorWrapper(error, request, response, next) {
  if (!error.isBoom) {
    next(boom.badImplementation());
  }
  next(error);
}

function errorHandler(error, request, response, next) {
  const {
    output: { statusCode, payload }
  } = error;
  response.status(statusCode);
  response.json(withErrorStack(payload, error.stack));
}

module.exports = {
  errorLog,
  errorWrapper,
  errorHandler
};
