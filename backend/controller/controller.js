const ConfigController = require('./config');

function init(expressApp) {
    new ConfigController.ConfigController(expressApp).init();
}

module.exports.init = init;

