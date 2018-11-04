const HealthService = require('../services/healthService')
var express = require('express');
var router = express.Router();

class HealthRouter {
  constructor (options = {}) {
  //  this.logger = options.logger || require('../util/defaultLogger')
    this.healthService = options.healthService || new HealthService(options);
  }

  async checkHealth (req, res, next) {
    this.healthService.checkHealth().then((data) => {
      res.send(data);
    });
  }

  getRoutes () {
    router.get('/health', (req, res, next) => { this.checkHealth(req, res, next); } );
    return router;
  }
}

module.exports = HealthRouter;