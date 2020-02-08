const ApplicationError = require("./error_model");
const logger = require('../logger').api;

function errorHandler(err, req, res, next) {
    logger.error(err.toString());
    if(err instanceof ApplicationError) {
        res.status(err.httpCode).json();
    } else {
        res.status(500).json();
    }
}

module.exports.middleware = errorHandler;