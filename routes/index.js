const HealthRouter = require('./healthRouter');
const MessageRouter = require('./messageRouter');

module.exports = {
    getRoutes(options) {
        let routes = [];
        routes.push(new HealthRouter(options).getRoutes());
        routes.push(new MessageRouter(options).getRoutes());
        return routes;
    }
  }