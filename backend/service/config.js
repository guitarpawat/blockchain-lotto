const configModel = require("../model/config").instance;
const ApplicationError = require("../errors/error_model");
const logger = require('../logger').api;

class ConfigService {
    #configModel = configModel;

    setNextLive(reqBody) {
        if(!reqBody.apiKey) {
            throw new ApplicationError(404, null, "apiKey is blank");
        }
        // TODO: Change this logic
        if(reqBody.apiKey !== "mock") {
            throw new ApplicationError(404, null, "apiKey is invalid");
        }
        let nextLive;
        try {
            nextLive = new Date(reqBody.nextLive)
        } catch (e) {
            throw new ApplicationError(500, e, "error in parse the date");
        }
        if(isNaN(nextLive)) {
            throw new ApplicationError(500, null, "date is invalid");
        }
        configModel.nextLive = nextLive;
        logger.info(`nextLive has been set to ${nextLive.toString()}`)
    }
}

module.exports.instance = new ConfigService();