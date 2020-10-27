/**
 * @class ApplicationError
 * @description base error class for application
 * @extends Error
 */
class ApplicationError extends Error {
  /**
   * @description initializes the error class
   *
   * @param {number} statusCode status code of the request
   * @param {string} message error message
   * @param {array} errors an array containing errors
   */
  constructor(statusCode, message = 'an error occurred', errors) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message;
    this.errors = errors;
  }
}

module.exports = {
  ApplicationError,
};
