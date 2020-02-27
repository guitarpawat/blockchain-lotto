const configService = require('./config').instance;

class StatusService {
    async getStatus(env) {
        let config = await configService.getConfiguration(env);
        if(typeof config.nextLive === 'undefined') {
            config.nextLive = null;
        }
        return {network: config.env, nextLive: config.nextLive};
    }
}

module.exports.instance = new StatusService();