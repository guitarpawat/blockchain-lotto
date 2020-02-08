const ApplicationError = require("../errors/error_model");
const configService = require('./config').instance;

class StatusService {
    #isLive = false;

    getStatus() {
        let isLive = this.#isLive;
        if(this.#isLive) {
            // TODO: Custom return when drawing
        } else {
            return {
                isLive: isLive,
                nextLive: configService.nextLive
            }
        }
    }
}

module.exports.instance = new StatusService();