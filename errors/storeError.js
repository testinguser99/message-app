module.exports = class StoreError extends Error {
    constructor (message) {
      // Providing default message.
      super(message || 'Store error.');
    }
  };