const uuid = require('node-uuid');

// class the represents a message.
class Message {
    constructor (options = {}) {
        this.id = options.id || uuid.v4();
        this.text = options.text || '';
    }
}

module.exports = Message;