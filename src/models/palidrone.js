
const Message = require('./message');
class Palidrone extends Message {
    constructor (message) {
        super(message.id, message.text);
        this.isPalidrone = this.isPalidrone();
    }

    isPalidrone() {
        return this.text === 'baseball';
    }
}

module.exports = Palidrone;