const MessageService = require('../services/messageService')
var express = require('express');
var router = express.Router();

class MessageRouter {
  constructor (options) {
    this.logger = options.logger;
    this.messageService = options.messageService || new MessageService(options);
  }

  async getMessages(req, res, next) {
    this.messageService.getMessages().then((data) => {
      res.send(data);
    });
  }

  async addMessage(req, res, next) {
    try {
      let data = await this.messageService.addMessage(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  getMessageById(req, res, next) {
    let id = req.params.id;
    this.messageService.getMessage(id).then((data) => {
      res.send(data);
    }, (error) => {
      next(error);
    });
  }
  
  async deleteMessageById(req, res, next) {
    let id = req.params.id;
    try {
      await this.messageService.deleteMessage(id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }

  getRoutes () {
    router.get('/messages', (req, res, next) => { this.getMessages(req, res, next); });
    router.post('/messages', (req, res, next) => { this.addMessage(req, res, next); });
    router.get('/messages/:id', (req, res, next) => { this.getMessageById(req, res, next); });
    router.delete('/messages/:id', (req, res, next) => { this.deleteMessageById(req, res, next); });
    return router;
  }
}

module.exports = MessageRouter;