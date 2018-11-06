const assert = require('chai').assert;
const Palindrome = require('../../models/palindrome');

describe('Palindrome', () =>  {

    describe('constructor', () => {
        it('with no arguments', () => {
            let message = new Palindrome();
            assert.isNotNull(message);
            assert.isNotNull(message.id);
            assert.equal(message.text, '');
            assert.equal(message.palindrome, true);
        })

        it('with arguments - text', () => {
            let message = new Palindrome({text: 'testing'});
            assert.isNotNull(message);
            assert.isNotNull(message.id);
            assert.equal(message.text, 'testing');
            assert.equal(message.palindrome, false);
          
        })

        it('with arguments - id', () => {
            let message = new Palindrome({id: '1'});
            assert.isNotNull(message);
            assert.equal(message.id, '1');
            assert.equal(message.text, '');
            assert.equal(message.palindrome, true);
        })

        it('with arguments - id + text', () => {
            let message = new Palindrome({id: '1', text: 'testing'});
            assert.isNotNull(message);
            assert.equal(message.id, '1');
            assert.equal(message.text, 'testing');
            assert.equal(message.palindrome, false);
        })
    })

    describe('palindrome tests', () => {
        const testData = [
            ['race car', true],
            ['test', false],
            ['not a palindrome', false],
            ['Go hang a salami, I\'m a lasagna hog', true],
            ['A man, a plan, a canal. Panama', true],
            ['never odd or even', true],
            ['nope', false],
            ['almostomla', false],
            ['My age is 0, 0 si ega ym.', true],
            ['1 eye for of 1 eye.', false],
            ['0_0 (: /-\ :) 0–0', true],
            ['Mr. Owl ate my metal worm', true],
            ['Was it a car or a cat I saw?', true],
            ['5885', true],
            ['85', false],
            ['10201', true],
            ['No \'x\' in Nixon', true],
            ['', true],
            ['a', true],
            [' a', true],
            ['a ', true],
            [' a ', true]
        ];

        testData.forEach((data) => {
            let message = new Palindrome({text: data[0]});
            assert.isNotNull(message);
            assert.isNotNull(message.id);
            assert.equal(message.text, data[0]);
            assert.equal(message.palindrome, data[1]);
        });

    })
})