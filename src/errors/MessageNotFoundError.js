module.exports = class MessageNotFoundError extends Error {
  constructor (message) {
    // Providing default message.
    super(message || 'Message not found');
  }
};