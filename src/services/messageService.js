const Palidrone = require('../models/palindrome');
const assert = require('assert');
const MessageNotFoundError = require('../errors/MessageNotFoundError');
const StoreError = require('../errors/StoreError');

class MessageService {
    constructor (options) {
        this.logger = options.logger;
        this.store = options.store || new (require('./memoryStoreService'))(options);
    }
  
    async addMessage(message) {
        this.logger.debug('MessageService.addMessage - Enter {:message => ' + message.text + '}');

        assert(message && message.text, 'Invalid argument.');

        let data = await this.store.add(message.text);
      
       this.logger.debug('MessageService.addMessage - Exit {:message => ' + message.text + '}');
       
       return data;
    }

    async getMessages() {
        this.logger.debug('MessageService.getMessages - Enter');
        
        let data = await this.store.getAll();
        
        this.logger.debug('MessageService.getMessages - Exit');
        
        return data;
    }

    async getMessage(id) {
        this.logger.debug('MessageService.getMessage - Enter {:id => ' + id + '}');

        assert(id, 'Invalid argument.');
      
        let data = await this.store.getById(id);
        if (!data) {
            throw new MessageNotFoundError();
        }

        this.logger.debug('MessageService.getMessage - Exit {:id => ' + id + '}');

        return new Palidrone(data);
    }
    getMessage(id) {
        this.logger.debug(`Enter - MessageService.getMessage(:id=${id})`);

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

    async deleteMessage(id) {
        this.logger.debug('MessageService.deleteMessage - Enter {:id => ' + id + '}');

        assert(id, 'Invalid argument.');
      
        let data = await this.store.deleteById(id);
        if (!data) {
            throw new MessageNotFoundError();
        }
        this.logger.debug('MessageService.deleteMessage - Exit {:id => ' + id + '}');
    }
  }
  
  module.exports = MessageService;


