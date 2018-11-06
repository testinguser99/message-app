const mocha = require('mocha');
const assert = require('chai').assert;
const Message = require('../../src/models/message');

describe('Message', function () {

    describe('constructor', () => {
        it('with no arguments', () => {
            let message = new Message();
            assert.isNotNull(message);
            assert.isNotNull(message.id);
            assert.equal(message.text, '');
        })

        it('with arguments - text', () => {
            let message = new Message({text: 'testing'});
            assert.isNotNull(message);
            assert.isNotNull(message.id);
            assert.equal(message.text, 'testing');
        })

        it('with arguments - id', () => {
            let message = new Message({id: '1'});
            assert.isNotNull(message);
            assert.equal(message.id, '1');
            assert.equal(message.text, '');
        })

        it('with arguments - id + text', () => {
            let message = new Message({id: '1', text: 'testing'});
            assert.isNotNull(message);
            assert.equal(message.id, '1');
            assert.equal(message.text, 'testing');
        })

    })
})