const Palidrone = require('../models/palindrome');
const assert = require('assert');
const MessageNotFoundError = require('../errors/MessageNotFoundError');
const StoreError = require('../errors/StoreError');

class MessageService {
    constructor (options) {
        this.logger = options.logger;
        this.store = options.store || new (require('./memoryStoreService'))(options);
    }
  
    addMessage(message) {
        this.logger.debug(`MessageService.addMessage(:message=${message.text})`);

        assert(message && message.text, 'Invalid argument.');

        return new Promise((resolve, reject) => {
            this.store.add(message.text).then((data) => {
                resolve(data);
            }, (error) => {
                var errMsg = error.message || error;
                var err = new StoreError(errMsg);
                reject(err);
            });
        });
    }

    getMessages() {
        this.logger.debug(`MessageService.getMessages()`);

        return new Promise((resolve, reject) => {
            this.store.getAll().then((data) => {
                resolve(data);
            }, (error) => {
                var errMsg = error.message || error;
                var err = new StoreError(errMsg);
                reject(err);
            });
        });
    }
    
    getMessage(id) {
        this.logger.debug(`MessageService.getMessage(:id=${id})`);

        assert(id, 'Invalid argument.');

        return new Promise((resolve, reject) => {
            this.store.getById(id).then((data) => {
                if (data) {
                    resolve(new Palindrome(data));
                } else {
                    reject( new MessageNotFoundError());
                }
            }, (error) => {
                var errMsg = error.message || error;
                var err = new StoreError(errMsg);
                reject(err);
            });
        });
    }

    deleteMessage(id) {
        this.logger.debug(`MessageService.deleteMessage(:id=${id})`);

        assert(id, 'Invalid argument.');
      
        this.store.deleteById(id).then((data) => {
            if (!data) {
                throw new MessageNotFoundError();
            }
        }, (error) => {
            var errMsg = error.message || error;
            var err = new StoreError(errMsg);
            reject(err); 
        });
        
    }
  }
  
  module.exports = MessageService;


