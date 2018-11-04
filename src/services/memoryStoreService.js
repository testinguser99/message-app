const Message = require('../models/message');
const uuid = require('node-uuid');

class MemoryStoreService {
    constructor (options) {
        this.logger = options.logger;
        this.store = {};
    }
  
    async getAll() {
        this.logger.debug('MemoryStoreService.getAll - Enter');
        return new Promise((resolve, reject) => {
        
            let data = Object.keys(this.store).map(function (key) {
                return this.store[key];
            }.bind(this));

            this.logger.debug('MemoryStoreService.getAll - Exit');

            resolve(data);
        });
    }

    async getById(id) {
        this.logger.debug('MemoryStoreService.getById - Enter {:id => ' + id + '}');
       
        return new Promise((resolve, reject) => {

            this.logger.debug('MemoryStoreService.getById - Exit {:id => ' + id + '}');
            
            resolve(this.store[id]);
        });
    }

    async add(text) {
        this.logger.debug('MemoryStoreService.add - Enter {:text => ' + text + '}');
        
        return new Promise((resolve, reject) => {
            var message = new Message(uuid.v4(), text);
            this.store[message.id] = message;

            this.logger.debug('MemoryStoreService.add - Exit {:text => ' + text + '}');
            
            resolve(message); 
        });
    }

    async deleteById(id) {
        this.logger.debug('MemoryStoreService.deleteById - Enter {:id => ' + id + '}');
       
        return new Promise((resolve, reject) => {
            delete this.store[id];
            
            this.logger.debug('MemoryStoreService.deleteById - Exit {:id => ' + id + '}');

            resolve({}); 
        });
    }
    
  }
  
  module.exports = MemoryStoreService;