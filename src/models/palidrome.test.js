const mocha = require('mocha');
const assert = require('chai').assert;
const Palindrome = require('./palindrome');
const Message = require('./message');

describe('Palindrome', function () {
    let testData = [
        ['1', 'race car', true],
        ['2', 'test', false],
        ['3', 'not a palindrome', false],
        ['4', 'Go hang a salami, I\'m a lasagna hog', true],
        ['5', 'A man, a plan, a canal. Panama', true],
        ['6', 'never odd or even', true],
        ['7', 'nope', false],
        ['8', 'almostomla', false],
        ['9', 'My age is 0, 0 si ega ym.', true],
        ['10', '1 eye for of 1 eye.', false],
        ['11', '0_0 (: /-\ :) 0–0', true],
        ['12', 'Mr. Owl ate my metal worm', true],
        ['13', 'Was it a car or a cat I saw?', true],
        ['14', '5885', true],
        ['15', '8585', false],
        ['16', '10201', true],
        ['17', 'No \'x\' in Nixon', true],

    ]
    describe('palindrome tests', () => {
        testData.forEach((value) => {
            let message = new Palindrome(new Message(value[0], value[1]));
            assert.equal(message.id, value[0]);
            assert.equal(message.text, value[1]);
            assert.equal(message.palindrome, value[2]);
        });

    })
})