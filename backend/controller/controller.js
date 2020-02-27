const StatusController = require('./status');

function init(expressApp) {
    new StatusController.instance(expressApp).init();
}

module.exports.init = init;

