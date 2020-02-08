const ApplicationError = require("../errors/error_model");
const logger = require('../logger').api;

class ConfigService {
    #nextLive = null;

    set nextLive(reqBody) {
        if(!reqBody.apiKey) {
            throw new ApplicationError(404, null, "apiKey is blank");
        }
        // TODO: Change this logic
        if(reqBody.apiKey !== "mock") {
            throw new ApplicationError(404, null, "apiKey is invalid");
        }
        let nextLive;
        try {
            if(reqBody.nextLive == null) {
                nextLive = null;
            } else {
                nextLive = new Date(reqBody.nextLive)
            }
        } catch (e) {
            throw new ApplicationError(500, e, "error in parse the date");
        }
        if(isNaN(nextLive)) {
            throw new ApplicationError(500, null, "date is invalid");
        }
        this.#nextLive = nextLive;
        logger.warn(`nextLive has been set to ${nextLive}`)
    }

    get nextLive() {
        return this.#nextLive;
    }
}

module.exports.instance = new ConfigService();