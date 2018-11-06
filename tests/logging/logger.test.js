const assert = require('chai').assert;
const logger = require('../../src/logging/logger');

describe('logger', () =>  {

    describe('instantiate', async () => {

        it('default', () => {
           assert.isNotNull(logger);
        })
    })
})