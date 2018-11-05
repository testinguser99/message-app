const assert = require('assert');

// class the represents a message.

class Message {
    constructor (id, text) {
        assert(id && text);
        this.id = id;
        this.text = text;
    }
}

module.exports = Message;