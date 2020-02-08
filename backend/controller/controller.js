const ConfigController = require('./config');
const StatusController = require('./status');

function init(expressApp) {
    new ConfigController.ConfigController(expressApp).init();
    new StatusController.StatusController(expressApp).init();
}

module.exports.init = init;

