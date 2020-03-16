const resultService = require('../service/result').instance;

class ResultController {
    
    constructor(expressApp) {
        this.expressApp = expressApp;
    }

    init() {
        this.expressApp.get('/api/v1/results', async (req, res, next) => {
            res.json(await resultService.getAllResults());
            next();
        })

        this.expressApp.get('/api/v1/results/:id', async (req, res, next) => {
            res.json(await resultService.getResultById(req.params.id));
            next();
        })
    }
}

module.exports.instance = ResultController;