function Palidrone(message) {
    this.id = message.id;
    this.text = message.text;
    this.palidrone = this.isPalidrone();
}

Palidrone.prototype.isPalidrone = function isPalidrone() {
    return this.text === 'baseball';
};

module.exports = Palidrone;