const configService = require('../service/config').instance;

class ConfigController {
    #configService = configService;
    constructor(expressApp) {
        this.expressApp = expressApp;
    }

    init() {
        this.expressApp.put('/api/v1/config/nextLive', (req, res, next) => {
            this.#configService.nextLive = req.body;
            res.json();
            next();
        })
    }
}

module.exports.ConfigController = ConfigController;