const bodyParser = require('body-parser');
const errorHandler = require('./errors/error_handler');

const controller = require('./controller/controller');

const logger = require('./logger').api;

const express = require('express');
const app = express();
const DefaultPort = 3000;

function initMiddleware() {
    app.use(bodyParser.json());
}

function initErrorHandler() {
    app.use(errorHandler.middleware);
}

function listen(port) {
    app.listen(port, () => logger.info(`Blockchain Lotto listening on port ${port}!`))
}

function start(port) {
    if(!port) {
        port = DefaultPort;
    }
    initMiddleware();
    controller.init(app);
    initErrorHandler();
    listen(port)
}

module.exports.start = start;
