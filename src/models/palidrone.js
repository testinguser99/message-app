// function Palidrone(message) {
//     this.id = message.id;
//     this.text = message.text;
//     this.palidrone = this.isPalidrone();
// }

// Palidrone.prototype.isPalidrone = function isPalidrone() {
//     return this.text === 'baseball';
// };
const Message = require('./Message');
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