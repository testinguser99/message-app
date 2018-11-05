const assert = require('assert');
const Message = require('./message');

// A decorator class for a message reprensenting a palindrome.
// A palindrome is a word, number, phrase, or other sequence of characters which reads 
// the same backward as forward, such as madam or racecar or the number 10201. 
// Sentence-length palindromes may be written when allowances are made for adjustments to 
// capital letters, punctuation, and word dividers, such as "A man, a plan, a canal, Panama!", 
// "Was it a car or a cat I saw?" or "No 'x' in Nixon".
class Palindrome {
    // constructor requires message to be passed in
    constructor (message) {
        assert(message && message.id && message.text);
        this.id = message.id;
        this.text = message.text;
        this.palindrome = this.isPalindrome();
    }
    
    // Punctunctuation, capitalization, and spaces are usually ignored.
    isPalindrome() {
        let regex = /[^A-Za-z0-9]/g;
        let str = this.text.toLowerCase().replace(regex, '');
        var len = str.length;
        for (var i = 0; i < len; i++) {
            if (str[i] !== str[len - i - 1]) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Palindrome;