const mocha = require('mocha');
const assert = require('chai').assert;
const Message = require('./message');

describe('Message', function () {

    describe('initialize ()', async () => {

        it('create', () => {
            let message = new Message('id1', 'testing');
            assert.equal(message.id, 'id1');
            assert.equal(message.text, 'testing');
        })

    })
})