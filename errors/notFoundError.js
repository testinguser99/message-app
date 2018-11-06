module.exports = class NotFoundError extends Error {
  constructor (message) {
    // Providing default message.
    super(message || 'Not found.');
  }
};