const MessageService = require('../services/messageService')
var express = require('express');
var router = express.Router();

class MessageRouter {
  constructor (options = {}) {
  //  this.logger = options.logger || require('../util/defaultLogger')
    this.messageService = options.messageService || new MessageService(options);
  }

  async getMessages(req, res, next) {
    this.messageService.getMessages().then((data) => {
      res.send(data);
    });
  }

  async addMessage(req, res, next) {
    res.type('application/json');

    let message = req.body;
    this.messageService.addMessage(message).then((data) => {
      res.send(data);
    });
  }

  async getMessageById(req, res, next) {
    res.type('application/json');

    let id = req.params.id;
    if (!id) {
        res.status(400); // Bad request - malformed
        res.send({error: 'malformed url - missing id'});
        return;
    }

    this.messageService.getMessage(id).then((data) => {
      res.send(data);
    });
  }
  
  async deleteMessageById(req, res, next) {
    
    let id = req.params.id;

    if (!id) {
        res.status(400); // Bad request - malformed
        res.send({error: 'malformed url - missing id'});
        return;
    }

    this.messageService.deleteMessage(id).then((data) => {
      res.status(204).end();
    });
  }

  getRoutes () {
    router.post('/messages', (req, res, next) => { this.addMessage(req, res, next); });
    router.get('/messages', (req, res, next) => { this.getMessages(req, res, next); });
    router.get('/messages/:id', (req, res, next) => { this.getMessageById(req, res, next); });
    router.delete('/messages/:id', (req, res, next) => { this.deleteMessageById(req, res, next); });
    return router;
  }
}

module.exports = MessageRouter;