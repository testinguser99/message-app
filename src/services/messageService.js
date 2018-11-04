const Palidrone = require('../models/palidrone');

class MessageService {
    constructor (options = {}) {
//      this.logger = options.logger || require('../util/defaultLogger')
        this.store = options.store || new (require('./memoryStoreService'));
        console.log('--------> MessageService constructor....');
    }
  
    async addMessage(message) {
        console.log('MessageService.add()...');
        return new Promise((resolve, reject) => {
            this.store.add(message.text).then((data) => {
                if (data) {
                    resolve(data);
                } 
                // TODO: check more type of problems...
            });
        })
    }

    async getMessages() {
        console.log('MessageService.getMessages()...');
        return new Promise((resolve, reject) => {
            this.store.getAll().then((data) => {
                console.log('-----> messageservice ', data);
                if (data) {
                    resolve(data);
                } 
                // TODO: check more type of problems...
            });
        })
    }

    async getMessage(id) {
        return new Promise((resolve, reject) => {
            this.store.getById(id).then((data) => {
                console.log('-----> messageservice ', data);
                if (data) {
                    resolve(new Palidrone(data));
                } 
                // TODO: check more type of problems...
            });
        });
    }

    async deleteMessage(id) {
        return new Promise((resolve, reject) => {
            this.store.deleteById(id).then((data) => {
                console.log('-----> messageservice ', data);
                if (data) {
                    resolve(data);
                } 
                // TODO: check more type of problems...
            });
        });
    }
  }
  
  module.exports = MessageService;


