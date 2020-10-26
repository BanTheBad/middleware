const errors = require('./errors');
const errorHandler = require('./errorHandler');
const logger = require('./logger');
const models = require('./modelsDBInstance');

module.exports = {
  errors,
  errorHandler,
  logger,
  ...models,
};
