const Palidrone = require('../models/palidrone');

class MessageService {
    constructor (options) {
        this.logger = options.logger;
        this.store = options.store || new (require('./memoryStoreService'))(options);
    }
  
    async addMessage(message) {
        this.logger.debug('MessageService.addMessage - Enter {:message => ' + message.text + '}');

        return new Promise((resolve, reject) => {
            this.store.add(message.text).then((data) => {
                if (data) {
                    
                    resolve(data);
                } 
                this.logger.debug('MessageService.addMessage - Exit {:message => ' + message.text + '}');
        
                // TODO: check more type of problems...
            });
        })
    }

    async getMessages() {
        this.logger.debug('MessageService.getMessages - Enter');
        
        return new Promise((resolve, reject) => {
            this.store.getAll().then((data) => {
                
                if (data) {
                    resolve(data);
                } 
                this.logger.debug('MessageService.getMessages - Exit');
                // TODO: check more type of problems...
            });
        })
    }

    async getMessage(id) {
        this.logger.debug('MessageService.getMessage - Enter {:id => ' + id + '}');
        return new Promise((resolve, reject) => {
            this.store.getById(id).then((data) => {
                if (data) {
                    resolve(new Palidrone(data));
                } 
                this.logger.debug('MessageService.getMessage - Exit {:id => ' + id + '}');

                // TODO: check more type of problems...
            });
        });
    }

    async deleteMessage(id) {
        this.logger.debug('MessageService.deleteMessage - Enter {:id => ' + id + '}');
        return new Promise((resolve, reject) => {
            this.store.deleteById(id).then((data) => {
                if (data) {
                    resolve(data);
                } 
                this.logger.debug('MessageService.deleteMessage - Exit {:id => ' + id + '}');
                // TODO: check more type of problems...
            });
        });
    }
  }
  
  module.exports = MessageService;


