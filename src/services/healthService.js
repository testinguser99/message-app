class HealthService {
    constructor (options) {
        this.logger = options.logger;
    }
  
    async checkHealth() {
        this.logger.debug('HealthService.checkHealth - Enter');
        return new Promise((resolve, reject) => {
            this.logger.debug('HealthService.checkHealth - Exit');
            
            resolve( { status: 'ok' } );
        })
    }
  }
  
  module.exports = HealthService;