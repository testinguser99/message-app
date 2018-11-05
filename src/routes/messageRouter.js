const MessageService = require('../services/messageService')
var express = require('express');
var router = express.Router();

class MessageRouter {
  constructor (options) {
    this.logger = options.logger;
    this.messageService = options.messageService || new MessageService(options);
  }

  getMessages(req, res, next) {
    this.messageService.getMessages().then((data) => {
      res.send(data);
    }, (error) => {
      next(error);
    });
  }

  addMessage(req, res, next) {
    this.messageService.addMessage(req.body).then((data) => {
      res.send(data);
    }, (error) => {
      next(error);
    });
  }

  getMessageById(req, res, next) {
    let id = req.params.id;
    this.messageService.getMessage(id).then((data) => {
      res.send(data);
    }, (error) => {
      next(error);
    });
  }
  
  deleteMessageById(req, res, next) {
    let id = req.params.id;
    this.messageService.deleteMessage(id).then((data) => {
      res.status(204).end();
    }, (error) => {
      next(error);
    })
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