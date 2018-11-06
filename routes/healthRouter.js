const HealthService = require('../services/healthService')
var express = require('express');
var router = express.Router();

class HealthRouter {
  constructor (options) {
    this.logger = options.logger;
    this.healthService = options.healthService || new HealthService(options);
  }

  checkHealth (req, res, next) {
    this.healthService.checkHealth().then((data) => {
      res.send(data);
    }, (error) => {
      next(error);
    });
  }

  getRoutes () {
    router.get('/health', (req, res, next) => { this.checkHealth(req, res, next); } );
    return router;
  }
}

module.exports = HealthRouter;