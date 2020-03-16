const StatusController = require('./status');
const ResultController = require('./result');

function init(expressApp) {
    new StatusController.instance(expressApp).init();
    new ResultController.instance(expressApp).init();
}

module.exports.init = init;

