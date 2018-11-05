const mocha = require('mocha');
const assert = require('chai').assert;
const Palidrone = require('./palidrone');
const Message = require('./message');

describe('Palidrone', function () {

    describe('initialize ()', async () => {

        it('create', () => {
            let message = new Palidrone(new Message('id1', 'testing'));
            assert.equal(message.id, 'id1');
            assert.equal(message.text, 'testing');
            assert.equal(message.isPalidrone, false);
        })

    })
})