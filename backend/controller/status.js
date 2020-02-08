const statusService = require('../service/status').instance;

class StatusController {
    #statusService = statusService;
    constructor(expressApp) {
        this.expressApp = expressApp;
    }

    init() {
        this.expressApp.get('/api/v1/status', (req, res, next) => {
            res.json(this.#statusService.getStatus());
            next();
        })
    }
}

module.exports.StatusController = StatusController;