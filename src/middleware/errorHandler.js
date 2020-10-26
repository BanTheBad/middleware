const { config } = require('dotenv');
const logger = require('../helpers/logger');

config();

/**
 * @function
 * @description a wrapper controller for error handling
 *
 * @param {Object} err error object
 * @param {Object} request express request object
 * @param {Object} response express response object
 * @param {Function} next callback to call next middleware
 *
 * @returns {Object} response from the server
 */
module.exports = (err, request, response, next) => {
  const isProduction = process.env.NODE_ENV === 'production';
  let errorMessage = {};

  if (response.headersSent) return next(err);

  if (!isProduction) {
    logger.error(err.stack);
    errorMessage = err;
  }

  return response.status(err.statusCode || 500).json({
    status: 'error',
    error: {
      message: err.message,
      ...(err.errors && { errors: err.errors }),
      ...(!isProduction && { trace: errorMessage }),
    },
  });
};
