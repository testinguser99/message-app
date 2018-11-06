const assert = require('chai').assert;
const StoreError = require('../../src/errors/storeError');

describe('StoreError', () => {

    describe('constructor', async () => {

        it('no argument - default message', () => {
            let error = new StoreError();
            assert.isNotNull(error);
            assert.isNotNull(error.message);
            assert.equal(error.message, 'Store error.');
        })

        it('with message', () => {
            let error = new StoreError('test message');
            assert.isNotNull(error);
            assert.isNotNull(error.message);
            assert.equal(error.message, 'test message');
        })

    })
})