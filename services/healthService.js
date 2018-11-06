class HealthService {
    constructor (options) {
        this.logger = options.logger;
    }
  
    checkHealth() {
        this.logger.debug(`HealthService.checkHealth()`);
        return new Promise((resolve, reject) => { 
            resolve( { status: 'ok' } );
        })
    }
  }
  
  module.exports = HealthService;