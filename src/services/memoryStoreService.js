const Message = require('../models/message');
const uuid = require('node-uuid');

class MemoryStoreService {
    constructor (options) {
        this.logger = options.logger;
        this.store = {};
    }
  
    getAll() {
        this.logger.debug(`MemoryStoreService.getAll()`);

        return new Promise((resolve, reject) => {
            let data = Object.keys(this.store).map(function (key) {
                return this.store[key];
            }.bind(this));

            resolve(data);
        });
    }

    getById(id) {
        this.logger.debug(`MemoryStoreService.getById(:id=${id})`);
       
        return new Promise((resolve, reject) => {
            resolve(this.store[id]);
        });
    }

    add(text) {
        this.logger.debug(`MemoryStoreService.add(:text=${text})`);
        
        return new Promise((resolve, reject) => {
            var message = new Message(uuid.v4(), text);
            this.store[message.id] = message;
            resolve(message); 
        });
    }

    deleteById(id) {
        this.logger.debug(`MemoryStoreService.deleteById(:id=${id})`);
       
        return new Promise((resolve, reject) => {
            if (this.store[id]) {
                delete this.store[id];
                resolve(id);
            } else {
                reject(new NotFoundError(`id ${id} not found`)); 
            }
        });
    }
    
  }
  
  module.exports = MemoryStoreService;