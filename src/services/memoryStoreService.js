const Message = require('../models/message');
const uuid = require('node-uuid');

class MemoryStoreService {
    constructor (options = {}) {
//      this.logger = options.logger || require('../util/defaultLogger')
        console.log('--------> MemoryStoreService constructor....');
        this.store = {};
        var message1 = new Message('1', 'hardcoded1');
        this.store[message1.id] = message1;
        var message2 = new Message('2', 'hardcoded2');
        this.store[message2.id] = message2;
    }
  
    async getAll() {
        console.log('--------> MemoryStoreService.get....');
        return new Promise((resolve, reject) => {
            console.log();

            let data = Object.keys(this.store).map(function (key) {
                return this.store[key];
            }.bind(this));

            resolve(data);
        });
    }

    async getById(id) {
        console.log('--------> MemoryStoreService.get(:id)....');
        return new Promise((resolve, reject) => {
            resolve(this.store[id]);
        });
    }

    async add(text) {
        console.log('--------> MemoryStoreService.add(:text)....');
        return new Promise((resolve, reject) => {
            var message = new Message(uuid.v4(), text);
            this.store[message.id] = message;
            console.log(JSON.stringify(this.store));
            resolve(message); 
        });
    }

    async deleteById(id) {
        return new Promise((resolve, reject) => {
            delete this.store[id];
            
            console.log('deletebyid ', JSON.stringify(this.store));
            resolve({}); 
        });
    }
    
  }
  
  module.exports = MemoryStoreService;

// new (require('./advertHandler'))({test: "one"});