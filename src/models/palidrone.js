
const Message = require('./message');

// class that represents a palidrone message.
class Palidrone extends Message {
    // constructor requires message to be passed in
    constructor (message) {
        super(message.id, message.text);
        this.isPalidrone = this.isPalidrone();
    }

    isPalidrone() {
        return this.text === 'baseball';
    }
}

module.exports = Palidrone;