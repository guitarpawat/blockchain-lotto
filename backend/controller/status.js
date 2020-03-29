const statusService = require('../service/status').instance;

class StatusController {
    
    constructor(expressApp) {
        this.expressApp = expressApp;
    }

    init() {
        this.expressApp.get('/api/v1/status', async (req, res, next) => {
            res.json(await statusService.getStatus());
            next();
        })
    }
}

module.exports.instance = StatusController;