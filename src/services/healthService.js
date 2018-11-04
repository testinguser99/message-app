class HealthService {
    constructor (options = {}) {
//      this.logger = options.logger || require('../util/defaultLogger')
        console.log('--------> HealthService constructor....');
    }
  
    async checkHealth() {
        console.log('--------> HealthService.checkHealth....');
        return new Promise((resolve, reject) => {
            //this.logger.info(`HealthService.checkHealth()`)
            resolve( { status: 'ok' } );
        })
    }
  }
  
  module.exports = HealthService;