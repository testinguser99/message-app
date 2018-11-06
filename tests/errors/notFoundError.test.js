const assert = require('chai').assert;
const NotFoundError = require('../../errors/notFoundError');

describe('NotFoundError', () => {

    describe('constructor', async () => {

        it('no argument - default message', () => {
            let error = new NotFoundError();
            assert.isNotNull(error);
            assert.isNotNull(error.message);
            assert.equal(error.message, 'Not found.');
        })

        it('with message', () => {
            let error = new NotFoundError('test message');
            assert.isNotNull(error);
            assert.isNotNull(error.message);
            assert.equal(error.message, 'test message');
        })

    })
})